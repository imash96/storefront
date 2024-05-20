import ArrowRight from "@icons/arrow-right"
import LocalizedClientLink from "@modules/common/localized-client-link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "404",
    description: "Something went wrong",
}

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
            <h1 className="text-2xl font-semibold">Page not found</h1>
            <p className="text-sm font-normal">
                The page you tried to access does not exist.
            </p>
            <LocalizedClientLink className="flex gap-x-1 items-center group" href="/" >
                <span className="text-grey-82">Go to frontpage</span>
                <ArrowRight className="group-hover:-rotate-45 ease-in-out duration-150" />
            </LocalizedClientLink>
        </div>
    )
}