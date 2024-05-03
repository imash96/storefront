import clsx from "@libs/utils/clsx"

type ButtonProp = {
    className?: string
    isLoading: boolean
    onClick?: () => void
    [x: string]: any
} & React.PropsWithChildren

export default function Button({ children, className, isLoading, ...prop }: ButtonProp) {
    return (
        <button disabled={isLoading} {...prop}
            className={
                clsx(
                    "flex text-center text-sm font-medium text-grey-86 hover:text-grey-88 opacity-90 hover:opacity-100",
                    className,
                    {
                        isLoading: "pointer-events-none"
                    }
                )
            }
        >
            {children}
        </button>
    )
}