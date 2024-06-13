import { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing"

import { getProductPrice } from "@/libs/utils/get-product-price"
import { RegionInfo } from "types/global"
import clsx from "@/libs/utils/clsx"

type productPriceProps = {
    product: PricedProduct,
    variant?: PricedVariant,
    region: RegionInfo
}

export default function ProductPrice({ product, variant, region, }: productPriceProps) {
    const { cheapestPrice, variantPrice } = getProductPrice({
        product,
        variantId: variant?.id,
        region,
    })

    const selectedPrice = variant ? variantPrice : cheapestPrice

    if (!selectedPrice) {
        return <div className="block w-32 h-9 bg-grey-88 animate-pulse" />
    }

    return (
        <div className="flex flex-col text-grey-81">
            <span className={clsx("text-3xl font-semibold", {
                "text-red-4": selectedPrice.price_type === "sale",
            })}>
                {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
                <>
                    <p>
                        <span className="text-grey-82">Original: </span>
                        <span className="line-through">
                            {selectedPrice.original_price}
                        </span>
                    </p>
                    <span className="text-grey-84">
                        -{selectedPrice.percentage_diff}%
                    </span>
                </>
            )}
        </div>
    )
}