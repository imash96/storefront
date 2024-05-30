"use client"

import { Region } from "@medusajs/medusa"
import { Fragment, useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"

import useToggleState, { StateType } from "@libs/hooks/use-toggle-state"
import { updateRegion } from "app/actions"
import { useParams, usePathname } from "next/navigation"
// import NativeSelect from "../test/native-select"
import NativeSelect from "./native-select"
import NewCustomSelect from "./custom-select"

type CountryOption = {
    country: string
    region: string
    label: string
}

type OptionProp = {
    value: string;
    label: string;
}

type CountrySelectProps = {
    regions: Region[]
}

const CountrySelect = ({ regions }: CountrySelectProps) => {
    const [current, setCurrent] = useState<CountryOption | undefined>(undefined)
    const [selected, setSelected] = useState<OptionProp | undefined>(undefined)

    const { regionCode } = useParams()
    const currentPath = usePathname().split(`/${regionCode}`)[1]

    console.log(regionCode, currentPath)
    const options: CountryOption[] | undefined = useMemo(() => {
        return regions
            ?.map((r) => {
                return r.countries.map((c) => ({
                    country: c.iso_2,
                    region: r.id,
                    label: c.display_name,
                }))
            })
            .flat()
            .sort((a, b) => a.label.localeCompare(b.label))
    }, [regions])

    const optionSelect: OptionProp[] | undefined = useMemo(() => {
        return regions
            ?.map((r) => {
                return r.countries.map((c) => ({
                    value: c.iso_2,
                    label: c.display_name,
                }))
            })
            .flat()
            .sort((a, b) => a.label.localeCompare(b.label))
    }, [regions])

    useEffect(() => {
        if (regionCode) {
            const option = options?.find((o) => o.country === regionCode)
            const option1 = optionSelect?.find((o) => o.value === regionCode)
            setCurrent(option)
            setSelected(option1)
        }
    }, [options, optionSelect, regionCode])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const country = e.target.value
        updateRegion(country, currentPath)
    }

    return (
        <>
            <NativeSelect onChange={handleChange} value={current?.country}>
                {options?.map((o, index) => {
                    return (
                        <option key={index} value={o.country}>
                            {o.label}
                        </option>
                    )
                })}
            </NativeSelect>
            <NewCustomSelect
                options={optionSelect}
                defaultValue={selected}
                placeholder="Select Country"
            />
        </>
    )
}

export default CountrySelect