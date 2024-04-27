import { Metadata } from "next"
import InteractiveLink from "@modules/common/interactive-link"

export const metadata: Metadata = {
    title: "404",
    description: "Something went wrong",
}

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 items-center text-grey-82 justify-center min-h-[calc(100vh-64px)]">
            <h1 className="text-2xl font-semibold">Page not found</h1>
            <p className="text-sm font-normal">
                The page you tried to access does not exist.
            </p>
            <InteractiveLink href="/">Go to frontpage</InteractiveLink>
        </div>
    )
}