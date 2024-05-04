import clsx from "@libs/utils/clsx"

export default function Divider({ className }: { className?: string }) {
    return (
        <div
            className={clsx("h-px w-full border-b border-grey-88 mt-1", className)}
        />
    )
}