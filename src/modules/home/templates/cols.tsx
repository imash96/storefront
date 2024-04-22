import ArrowRight from "@icons/arrow-right";
import LocalizedClientLink from "@modules/common/localized-client-link";
import CollectionContent from "../components/cols-content";


export default function Collection() {
    return (
        <section aria-labelledby="collection-heading" className="bg-grey-20">
            <div className="mx-auto max-w-7xl pt-8 px-2 sm:px-4 sm:pt-12 md:px-6 lg:px-8 lg:pt-14">
                <div className="md:flex md:items-baseline md:justify-between">
                    <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                        Shop by Collection
                        <p className="text-sm md:text-base lg:text-lg font-extralight text-grey-83">Each season, we collaborate with designers to create a new collection.</p>
                    </h2>
                    <LocalizedClientLink href="/collection" className="hidden group text-sm font-medium self-end text-indigo-1 hover:text-indigo-2 md:flex md:gap-x-1">
                        View all
                        <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                    </LocalizedClientLink>
                </div>
                <CollectionContent />
                <div className="mt-3 md:hidden">
                    <a href="#" className="flex group gap-x-1 text-sm font-medium text-indigo-1 hover:text-indigo-2">
                        View all
                        <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                    </a>
                </div>
            </div>
        </section>
    )
}