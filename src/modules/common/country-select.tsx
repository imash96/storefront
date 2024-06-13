"use client"

import { Region } from "@medusajs/medusa"
import { useEffect, useMemo, useState } from "react"
import { updateRegion } from "app/actions"
import { useParams, usePathname } from "next/navigation"
import CustomSelect from "./select-custom"
import NativeSelect from "./select-native"
import Divider from "./divider"

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

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.currentTarget
        updateRegion(value, currentPath)
    }

    return (
        selected &&
        <>
            <span>Custom Select:</span>
            <CustomSelect
                name="select"
                options={options}
                onChange={handleChange}
                defaultValue={selected}
                placeholder="Select Country"
                isSearchable
                // errors={{
                //     x: ''
                // }}
                disabled
            />
            <CustomSelect
                name="select"
                options={options}
                onChange={handleChange}
                defaultValue={selected}
                placeholder="Select Country"
                isSearchable
                errors={{
                    x: ''
                }}
            />
            <CustomSelect
                name="select"
                options={options}
                onChange={handleChange}
                defaultValue={selected}
                placeholder="Select Country"
                isSearchable
            />
            <Divider />
            <span>Native Select:</span>
            <NativeSelect
                name="select"
                onChange={handleSelectChange}
                value={selected.value}
                placeholder="Select Country"
                // errors={{
                //     x: ''
                // }}
                disabled
            >
                {options.map((option, index) =>
                    <option key={index} value={option.value}>{option.label}</option>
                )}
            </NativeSelect>
            <NativeSelect
                name="select"
                onChange={handleSelectChange}
                value={selected.value}
                placeholder="Select Country"
                errors={{
                    x: ''
                }}
            >
                {options.map((option, index) =>
                    <option className="text-grey-81 bg-grey-18" key={index} value={option.value}>{option.label}</option>
                )}
            </NativeSelect>
            <NativeSelect
                name="select"
                onChange={handleSelectChange}
                value={selected.value}
                placeholder="Select Country"
            >
                {options.map((option, index) =>
                    <option key={index} value={option.value}>{option.label}</option>
                )}
            </NativeSelect>
        </>

    )
}