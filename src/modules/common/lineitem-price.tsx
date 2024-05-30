import { formatAmount } from "@libs/utils/prices"
import type { LineItem, Region } from "@medusajs/medusa"
import { getPercentageDiff } from "@libs/utils/get-precentage-diff"
import { CalculatedVariant } from "types/medusa"

type LineItemPriceProps = {
    item: Omit<LineItem, "beforeInsert">
    region: Region
    style?: "default" | "tight"
}

const LineItemPrice = ({ item, region, style = "default" }: LineItemPriceProps) => {
    const originalPrice =(item.variant as CalculatedVariant).original_price * item.quantity
    const hasReducedPrice = (item.total || 0) < originalPrice

    return (
        <div className="flex flex-col gap-x-2 text-grey-83 items-end">
            <div className="text-left">
                {hasReducedPrice && (
                    <>
                        <p>
                            {style === "default" && (
                                <span className="text-grey-83">Original: </span>
                            )}
                            <span className="line-through text-grey-85">
                                {formatAmount({
                                    amount: originalPrice,
                                    region: region,
                                    includeTaxes: false,
                                })}
                            </span>
                        </p>
                        {style === "default" && (
                            <span className="text-red-2">
                                -{getPercentageDiff(originalPrice, item.total || 0)}%
                            </span>
                        )}
                    </>
                )}
                <span className={`text-sm leading-6 font-normal ${hasReducedPrice ? 'text-grey-84' : ''}`}>
                    {formatAmount({
                        amount: item.total || 0,
                        region: region,
                        includeTaxes: false,
                    })}
                </span>
            </div>
        </div >
    )
}

export default LineItemPrice
