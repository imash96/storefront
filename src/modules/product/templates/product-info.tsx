import LocalizedClientLink from "@modules/common/localized-client-link";
import { ProductCollection } from "@medusajs/medusa";
import ProductRating from "../components/product-rating";

type productInfoProp = {
    brand?: string | null
    title?: string
    description?: string | null
}

export default function ProductInfo({ brand, title, description }: productInfoProp) {
    return (
        <div id="product-info" className="flex flex-col gap-y-4 text-grey-81">
            <div className="flex flex-col gap-y-2 lg:max-w-[500px] mx-auto">
                <span className="text-sm text-text-active-c hover:text-text-active-h" >
                    Brand: {brand ? brand : 'Generic'}
                </span>
                <ProductRating />
                <h2 className="text-3xl leading-10 tracking-tight font-bold text-xl md:text-2xl" data-testid="product-title">
                    {title}
                </h2>
                <span className="text-sm text-grey-83" data-testid="product-description">
                    {description}
                </span>
            </div>
        </div>
    )
}