import ArrowRight from "@/icons/arrow-right"
import { getCollectionsList, getProductsList, getRegion } from "@/libs/data"
import { Product } from "@medusajs/medusa"
import CreateSection from "@/modules/common/create-section"
import LocalizedClientLink from "@/modules/common/localized-client-link"
import Image from "next/image"
import { cache } from "react"
import { ProductCollectionWithPreviews } from "types/global"

const getCollectionsWithProducts = cache(
    async (regionCode: string): Promise<ProductCollectionWithPreviews[] | null> => {
        const { collections } = await getCollectionsList()

        if (!collections) {
            return null
        }

        const collectionIds = collections.filter(collection => collection.is_active).map((collection) => collection.id)

        await Promise.all(collectionIds.map((id) =>
            getProductsList({
                queryParams: { collection_id: [id] },
                regionCode,
            })
        )).then((responses) => responses.forEach(({ response, queryParams }) => {
            let collection

            if (collections) {
                collection = collections.find(
                    (collection) => collection.id === queryParams?.collection_id?.[0]
                )
            }

            if (!collection) {
                return
            }

            collection.products = response.products as unknown as Product[]
        })
        )

        return collections as unknown as ProductCollectionWithPreviews[]
    }
)

export default async function Page({ params: { regionCode }, }: { params: { regionCode: string } }) {
    const collections = await getCollectionsWithProducts(regionCode)
    const region = await getRegion(regionCode)

    if (!collections || !region) {
        return null
    }

    return (
        <>
            {collections.map(collection =>
                <CreateSection key={collection.id} sectionName="new-arrival">
                    <div className="xs:flex xs:items-center xs:justify-between">
                        <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                            {collection.title}
                        </h2>
                        <LocalizedClientLink href={`/collection/${collection.handle}`} className="flex gap-x-1 items-center group text-sm font-medium text-indigo-1 hover:text-indigo-2">
                            View all
                            <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                        </LocalizedClientLink>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                        {collection.products?.map(product => (
                            <div key={product.id} className="group relative">
                                <div className="h-56 w-full overflow-clip rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                                    <Image
                                        width={300}
                                        height={400}
                                        src={product.thumbnail ? product.thumbnail : ''}
                                        alt={`product.imageAlt`}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-grey-81">
                                    <LocalizedClientLink href={`/product/${product.handle}`}>
                                        <span className="absolute inset-0" />
                                        {product.title}
                                    </LocalizedClientLink>
                                </h3>
                                <p className="mt-1 text-sm font-medium text-grey-83">
                                    {/* {product.variants[0].calculated_price_incl_tax} */}{"price"}
                                </p>
                            </div>
                        ))}
                    </div>
                </CreateSection>
            )}
        </>

    )
}