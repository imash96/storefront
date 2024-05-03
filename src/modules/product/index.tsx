import type { Region } from "@medusajs/medusa"
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { notFound } from "next/navigation"
import ProductSlider from "./templates/product-slider"
import ProductInfo from "./templates/product-info"
import ProductActions from "./templates/product-action"
import ProductTabs from "./templates/product-tabs"
import PlusIcon from "@icons/plus"
import MinusIcon from "@icons/minus"

type productProps = {
    product: PricedProduct
    region: Region
    countryCode?: string
}

export default function Product({ product, region }: productProps) {
    if (!product || !product.id) {
        return notFound()
    }
    return (
        <>
            <div className="grid grid-cols-12 mx-auto max-w-7xl p-4 sm:px-4 sm:py-6 md:px-6 lg:px-8 lg:py-8 xl:px-0">
                <div className="col-span-12 flex flex-col self-start lg:sticky top-0 w-full gap-3 md:flex-row-reverse lg:col-span-7">
                    <ProductSlider images={product?.images || []} />
                </div>
                <div className="col-span-12 flex flex-col gap-y-3 w-full py-6 lg:px-4 lg:pt-0 lg:col-span-5">
                    <ProductInfo title={product.title} description={product.description} brand={product.brand} />
                    <ProductActions product={product} region={region} />
                    <div>
                        <ProductTabs product={product} />
                    </div>
                </div>
            </div>
        </>
    )
}