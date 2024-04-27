import ArrowRight from "@icons/arrow-right";
import { medusaClient } from "@libs/config";
import { getRegion } from "@libs/data";
import LocalizedClientLink from "@modules/common/localized-client-link";

export default async function NewArrival({ countryCode }: { countryCode: string }) {
    const region = await getRegion(countryCode)

    if (!region) {
        return null
    }
    const { products } = await medusaClient.products.list({
        limit: 4,
        region_id: region.id
    })
    return (
        <section aria-labelledby="new-arrival-heading" className="bg-grey-20">
            <div className="mx-auto max-w-7xl pt-8 px-2 sm:px-4 sm:pt-12 md:px-6 lg:px-8 lg:pt-14">
                <div className="xs:flex xs:items-center xs:justify-between">
                    <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                        New Arrivals
                    </h2>
                    <LocalizedClientLink href="/collection/new-arrivals" className="flex gap-x-1 items-center group text-sm font-medium text-indigo-1 hover:text-indigo-2">
                        View all
                        <ArrowRight className="-rotate-45 group-hover:rotate-0" />
                    </LocalizedClientLink>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.map(product => (
                        <div key={product.id} className="group relative">
                            <div className="h-56 w-full overflow-clip rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                                <img
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
                                {product.variants[0].calculated_price_incl_tax}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}