import type { ProductOption } from "@medusajs/medusa"
import React from "react"
import { onlyUnique } from "@libs/utils/only-unique"
import clsx from "@libs/utils/clsx"

type OptionSelectProps = {
    option: ProductOption
    current: string
    updateOption: (option: Record<string, string>) => void
    title: string
    disabled: boolean
}

export default function OptionSelect({ option, current, updateOption, title, disabled, }: OptionSelectProps) {
    const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

    return (
        <div className="flex flex-col gap-y-3 text-grey-81">
            <span className="text-sm">{title}</span>
            <div className="grid grid-cols-3 sm:grid-cols-4 xm:grid-cols-5 xl:grid-cols-6 gap-2 text-sm font-medium">
                {filteredOptions.map((v) => {
                    return (
                        <button onClick={() => updateOption({ [option.id]: v })} key={v} disabled={disabled} className={clsx(
                            "border text-sm font-base h-10 rounded-rounded p-2 flex-1",
                            {
                                "bg-grey-19 border-grey-83": v === current,
                                "border-grey-88 bg-grey-20 hover:shadow-md shadow-grey-84 transition-shadow ease-in-out duration-150": v !== current,
                            }
                        )}>
                            {v}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}