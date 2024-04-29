import ArrowRight from "@icons/arrow-right";
import { medusaClient } from "@libs/config";
import LocalizedClientLink from "@modules/common/localized-client-link";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryContent() {
    const { product_categories } = await medusaClient.productCategories.list({ parent_category_id: "null" }, { next: { tags: ["category"] } })
    const category_6 = product_categories.slice(0, 6)

    const firstHalf = category_6.splice(0, 3);
    const secondHalf = category_6.splice(-3);
    return (
        <>
            {[firstHalf, secondHalf].map((categories, xIndex) => (
                <div key={xIndex} className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
                    {categories.map((category, yIndex) => (
                        <div key={category.id} className={`group aspect-w-2 aspect-h-1 shadow-md shadow-grey-84 overflow-clip rounded-md md:h-full ${(0 == xIndex && 0 == yIndex || 1 == xIndex && yIndex == 1) ? "md:col-span-2 md:row-span-2" : "md:relative md:h-full"}`}>
                            <Image
                                src={category.thumbnail} width={500} height={250} alt={category.alt}
                                className="object-cover object-center group-hover:opacity-75 md:absolute md:inset-0 md:h-full md:w-full"
                            />
                            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-gradient-to-tr from-grey-83 from-30% opacity-50" />
                            <div className="flex items-end p-6 md:absolute md:inset-0">
                                <div>
                                    <h3 className="font-bold text-grey-86 text-lg">
                                        <LocalizedClientLink href={`/category/${category.handle}`}>
                                            <span className="absolute inset-0" />
                                            {category.name}
                                        </LocalizedClientLink>
                                    </h3>
                                    <p aria-hidden="true" className="mt-0.5 text-base text-grey-88 flex">
                                        Shop now <ArrowRight />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}