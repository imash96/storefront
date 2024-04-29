import ArrowRight from "@icons/arrow-right";
import LocalizedClientLink from "@modules/common/localized-client-link";
import CollectionContent from "../components/cols-content";
import CreateSection from "@modules/common/create-section";

export default function Collection() {
    return (
        <CreateSection sectionName="collection">
            <div className="md:flex md:items-baseline md:justify-between">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                    Shop by Collection
                    <p className="text-sm md:text-base lg:text-lg font-extralight text-grey-83">
                        Collections Crafted for You: Navigate Our Collections, Define Your Style!
                    </p>
                </h2>
                <LocalizedClientLink href="/collections" className="hidden group text-sm font-medium self-end text-indigo-1 hover:text-indigo-2 md:flex md:gap-x-1">
                    Browse all collections
                    <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                </LocalizedClientLink>
            </div>
            <CollectionContent />
            <div className="mt-3 md:hidden">
                <LocalizedClientLink href="/collections" className="flex group gap-x-1 text-sm font-medium text-indigo-1 hover:text-indigo-2">
                    Browse all collections
                    <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                </LocalizedClientLink>
            </div>
        </CreateSection>
    )
}