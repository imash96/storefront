import MinusIcon from "@icons/minus";
import PlusIcon from "@icons/plus";
import useToggleState from "@libs/hooks/use-toggle-state";

type accordionProp = {
    title: string
} & React.PropsWithChildren

export default function Accordion({ title, children }: accordionProp) {
    const { state, toggle } = useToggleState()

    return (
        <details open={state} onToggle={() => toggle()} className="border-grey-18 group border-t last:border-b px-1 py-2">
            <summary className="flex w-full items-center justify-between select-none py-3">
                <span className="text-left text-grey-81 font-normal text-sm">
                    {title}
                </span>
                {state ? <MinusIcon className="" /> : <PlusIcon className="" />}
            </summary>
            {children}
        </details >
    )
}