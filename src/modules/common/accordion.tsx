"use client"

import MinusIcon from "@/icons/minus";
import PlusIcon from "@/icons/plus";
import useToggleState from "@/libs/hooks/use-toggle-state";
import clsx from "@/libs/utils/clsx";

type accordionProp = {
    title: string
} & React.PropsWithChildren

export default function Accordion({ title, children }: accordionProp) {
    const { state, toggle } = useToggleState()

    return (
        <details open={state} onToggle={() => toggle()} className="accordion border-grey-18 group border-t last:border-b px-1 py-2">
            <summary className="flex w-full items-center text-base text-grey-81 justify-between cursor-pointer select-none py-3">
                <span className="text-left font-semibold">
                    {title}
                </span>
                <div className="p-2 rounded-md hover:bg-grey-18">
                    {state ? <MinusIcon className="" /> : <PlusIcon className="" />}
                </div>
            </summary>
            <div className={clsx(
                "transition-maxHeight duration-1000 ease-out",
                {
                    "max-h-96": state,
                    "max-h-0": !state,
                }
            )}>
                {children}
            </div>
        </details >
    )
}

