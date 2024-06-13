import ArrowRight from "@/icons/arrow-right"
import LocalizedClientLink from "./localized-client-link"

type InteractiveLinkProps = {
    href: string
    children?: React.ReactNode
    onClick?: () => void
}

export default function InteractiveLink({ href, children, onClick, ...props }: InteractiveLinkProps) {
    return (
        <LocalizedClientLink className="flex gap-x-1 items-center group" href={href} onClick={onClick} {...props} >
            <span className="text-grey-82">{children}</span>
            <ArrowRight className="group-hover:-rotate-45 ease-in-out duration-150" />
        </LocalizedClientLink>
    )
}
