import LocalizedClientLink from "@/modules/common/localized-client-link"
import CategoryContent from "../components/cats-content"
import ArrowRight from "@/icons/arrow-right"
import CreateSection from "@/modules/common/create-section"


export default function Category() {
    return (
        <CreateSection sectionName="category">
            <div className="md:flex md:items-baseline md:justify-between">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                    Shop by Category
                    <p className="text-sm md:text-base lg:text-lg font-extralight text-grey-83">
                        Discover Your Style: Navigate by Category for Effortless Shopping!
                    </p>
                </h2>
                <LocalizedClientLink href="/category" className="hidden group text-sm font-medium self-end text-indigo-1 hover:text-indigo-2 md:flex md:gap-x-1">
                    Browse all categories
                    <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                </LocalizedClientLink>
            </div>
            <CategoryContent />
            <div className="mt-3 md:hidden">
                <LocalizedClientLink href="/category" className="flex group gap-x-1 text-sm font-medium text-indigo-1 hover:text-indigo-2">
                    Browse all categories
                    <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                </LocalizedClientLink>
            </div>
        </CreateSection>
    )
}