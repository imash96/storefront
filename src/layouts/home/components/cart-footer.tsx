import { Cart } from "@medusajs/medusa"
import { formatAmount } from "@libs/utils/prices"
import LocalizedClientLink from "@modules/common/localized-client-link"
import Button from "@modules/common/button"
import ArrowRight from "@icons/arrow-right"
import CartExploreButton from "./cart-explore-button"

type cartContent = {
    cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

export default function CartFooter({ cart }: cartContent) {
    return (
        <div className="sticky bottom-0 border-t border-grey-12 z-10 bg-grey-18 py-4 px-2 sm:px-4">
            <div className="flex flex-col text-grey-81">
                <div className="flex justify-between">
                    <p className="font-semibold">Subtotal</p>
                    <span className="text-lg font-base">
                        {formatAmount({
                            amount: cart.subtotal || 0,
                            region: cart.region,
                            includeTaxes: true,
                        })}
                    </span>
                </div>
                <p className="mt-0.5 text-sm text-grey-83">Shipping and taxes calculated at checkout.</p>
                <LocalizedClientLink href="/cart" className='w-full mt-4'>
                    <Button className="bg-blue-2">Go to Cart</Button>
                </LocalizedClientLink>
                <CartExploreButton className="mt-4 flex gap-2 justify-center text-center text-sm hover:animate-pulse hover:text-grey-85 active:text-grey-83">
                    Continue Shopping
                    <ArrowRight />
                </CartExploreButton>
            </div>
        </div>
    )
}