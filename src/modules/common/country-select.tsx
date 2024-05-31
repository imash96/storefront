"use client"

import { Region } from "@medusajs/medusa"
import { useEffect, useMemo, useState } from "react"
import { updateRegion } from "app/actions"
import { useParams, usePathname } from "next/navigation"
import CustomSelect from "./custom-select"

type OptionProp = {
    value: string;
    label: string;
}

type CountrySelectProps = {
    regions: Region[]
}

export default function CountrySelect({ regions }: CountrySelectProps) {
    const [selected, setSelected] = useState<OptionProp | undefined>(undefined)

    const { regionCode } = useParams()
    const currentPath = usePathname().split(`/${regionCode}`)[1]

    const options: OptionProp[] | undefined = useMemo(() => {
        return regions?.map((r) => {
            return r.countries.map((c) => ({
                value: c.iso_2,
                label: c.display_name,
            }))
        }).flat().sort((a, b) => a.label.localeCompare(b.label))
    }, [regions])

    useEffect(() => {
        if (regionCode) {
            const option = options?.find((o) => o.value === regionCode)
            setSelected(option)
        }
    }, [options, regionCode])

    const handleChange = (value: string) => {
        updateRegion(value, currentPath)
    }

    return (
        selected &&
        <CustomSelect
            options={options}
            onChange={handleChange}
            defaultValue={selected}
            placeholder="Select Country"
            isSearchable
        />
    )
}