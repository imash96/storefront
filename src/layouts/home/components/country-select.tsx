"use client"

import ChevronDown from "@icons/chevron-down"
import Spinner from "@icons/spinner"
import { type Region } from "@medusajs/medusa"
import useToggleState, { type StateType } from "@libs/hooks/use-toggle-state"
import { useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { useParams, usePathname } from "next/navigation"
import { updateRegion } from "app/actions"

type CountryOption = {
    country: string
    region: string
    label: string
}

type CountrySelectProps = {
    regions: Region[]
    toggleState?: StateType
}
export default function CountrySelect({ regions }: CountrySelectProps) {
    const [current, setCurrent] = useState<CountryOption | undefined>(undefined)
    const [isSettingRegion, setIsSettingRegion] = useState<boolean>(false)
    const { state, open, close, toggle } = useToggleState()
    const { regionCode } = useParams()
    const currentPath = usePathname().split(`/${regionCode}`)[1]
    const options: CountryOption[] | undefined = useMemo(() => {
        return regions?.map((r) => {
            return r.countries!.map((c) => ({
                country: c.iso_2,
                region: r.id,
                label: c.display_name,
            }))
        }).flat()
    }, [regions])

    useEffect(() => {
        regionCode && setCurrent(options?.find((o) => o.country === regionCode))
    }, [regionCode, options])

    const handleClick = async (option: CountryOption) => {
        setIsSettingRegion(true)
        close
        await updateRegion(option.country, currentPath)
        setIsSettingRegion(false)
    }

    return (
        <div className="w-48 ml-auto static cursor-default h-9" onMouseEnter={open} onMouseLeave={close} onClick={toggle}>
            <div className="relative flex items-center gap-x-2 justify-end sm:text-sm h-full">
                {current && <span className="text-sm flex items-center gap-x-2">
                    <ReactCountryFlag svg style={{ width: "16px", height: "16px" }} countryCode={current.country} alt={current.label} />
                    {current.label}
                </span>}
                {isSettingRegion ? <Spinner width={16} /> : <ChevronDown className={`${state ? 'rotate-180 transform' : ''} h-5 w-5`} />}
            </div>
            <ul className={`${state ? "opacity-100" : "hidden opacity-0"} country-select absolute w-48 shadow-md shadow-grey-18 z-30 bg-grey-18 text-sm border border-grey-16 rounded-md overflow-y-auto max-h-72`}>
                {options?.map((o, index) => (
                    <li key={index} className={`${regionCode === o.country ? "pointer-events-none bg-grey-20 text-blue-4" : "active:bg-grey-15 hover:bg-grey-16 text-grey-81"} flex py-2 cursor-pointer gap-2 px-3`} onClick={() => handleClick(o)}>
                        <span className={`${regionCode === o.country ? "font-semibold" : "font-normal"} block truncate`}  >
                            <ReactCountryFlag svg className="w-4 h-4" countryCode={o.country} alt={o.label} />
                            {` ${o.label}`}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}