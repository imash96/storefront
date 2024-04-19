
type ButtonProp = {
    className?: string
    onClick?: () => void
    [x: string]: any
} & React.PropsWithChildren

export default function Button({ children, className, ...prop }: ButtonProp) {
    return (
        <button className={`block w-full rounded-full p-3 text-center text-sm font-medium text-grey-86 hover:text-grey-88 opacity-90 hover:opacity-100 ${className ? className : ''}`}>
            {children}
        </button>
    )
}