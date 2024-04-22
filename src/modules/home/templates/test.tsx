import ArrowRight from "@icons/arrow-right";
import LocalizedClientLink from "@modules/common/localized-client-link";
import TestimonalSlider from "../components/test-slider";
import "@styles/testimonal.css";

export default function Testimonal() {
    return (
        <section aria-labelledby="testimonal-heading" className="bg-grey-20">
            <div className="mx-auto max-w-7xl pt-8 px-2 sm:px-4 sm:pt-12 md:px-6 lg:px-8 lg:pt-14">
                <div className="xs:flex xs:items-baseline xs:justify-between">
                    <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                        What our customers say
                        <p className="text-sm md:text-base lg:text-lg font-extralight text-grey-83">about our product and service.</p>
                    </h2>
                    <LocalizedClientLink href="/collection" className="flex gap-x-1 group text-sm font-medium self-end text-indigo-1 hover:text-indigo-2">
                        View all
                        <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                    </LocalizedClientLink>
                </div>
                <div className="flex mt-4">
                    <TestimonalSlider />
                </div>
            </div>
        </section>
    )
}