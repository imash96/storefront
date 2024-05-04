import type { ProductOption } from "@medusajs/medusa"
import React from "react"
import { onlyUnique } from "@libs/utils/only-unique"
import clsx from "@libs/utils/clsx"
import useToggleState from "@libs/hooks/use-toggle-state"
import LocalizedClientLink from "@modules/common/localized-client-link"

type OptionSelectProps = {
    option: ProductOption
    current: string
    updateOption: (option: Record<string, string>) => void
    title: string
    disabled: boolean
}

export default function OptionSelect({ option, current, updateOption, title, disabled, }: OptionSelectProps) {
    const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)
    const { state, open, close } = useToggleState(false)
    return (
        <div className="flex flex-col gap-y-3 text-grey-81">
            <div className="flex justify-between">
                <span className="text-sm font-medium">{title}</span>
                {title === 'Size' && <LocalizedClientLink href="/size-guide" className="text-sm font-medium underline">Measurements Chart</LocalizedClientLink>}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 xm:grid-cols-5 xl:grid-cols-6 gap-2 text-sm font-semibold">
                {filteredOptions.map((v) => {
                    return (
                        <button onClick={() => updateOption({ [option.id]: v })} key={v} disabled={disabled} className={clsx(
                            "border text-sm font-base h-12 rounded-rounded p-2 flex-1 transition-all duration-200",
                            {
                                "bg-grey-19 border-blue-2 text-blue-2": v === current,
                                "border-grey-14 bg-grey-18 hover:shadow-md shadow-grey-84 transition-shadow ease-in-out duration-150": v !== current,
                                "col-span-2": v == 'One Size'
                            }
                        )}>
                            {v}
                        </button>
                    )
                })}
            </div>
            {current === 'One Size' && <span className="text-xs text-red-3 font-semibold">You can select or add measurement during checkout</span>}
        </div>
    )
}