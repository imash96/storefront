import { Cart } from "@medusajs/medusa";
import DeleteButton from "@modules/common/delete-button";
import LineItemOptions from "@modules/common/lineitem-options";
import LineItemPrice from "@modules/common/lineitem-price";
import LocalizedClientLink from "@modules/common/localized-client-link";
import Thumbnail from "@modules/product/components/thumbnail";
import CartFooter from "./cart-footer";
import CartRemoveButton from "./cart-remove-button";
import CartEditQuantity from "./cart-quantity-button";

export default function CartMenuContent({ cart }: { cart: Omit<Cart, "beforeInsert" | "afterLoad"> }) {
    return (
        <>
            <div className="overflow-y-auto mb-auto">
                <ul role="list" className="grid gap-y-1 xs:gap-y-2 py-1 xs:py-2 px-1 xs:px-3 sm:px-2">
                    {cart.items.sort((a, b) => { return a.created_at > b.created_at ? -1 : 1 }).map((item) => (
                        <li key={item.id} className="flex px-2 py-1 rounded-sm bg-grey-20 border-b border-grey-17">
                            <div className="relative rounded-md">
                                <Thumbnail thumbnail={item.thumbnail} size="cart" className="bg-thumbnail border border-grey-18 rounded-soft" />
                                <CartRemoveButton itemId={item.id} type='default' className="absolute z-25 top-0 right-0 -mt-2 -mr-2" />
                            </div>
                            <LocalizedClientLink href={`/product/${item.variant.product.handle}`} className="ml-2 py-1 w-full">
                                <h3 className="leading-tight text-truncate font-semibold">{item.title}</h3>
                                <LineItemOptions variant={item.variant} quantity={item.quantity} />
                            </LocalizedClientLink>
                            <div className="flex flex-col justify-between py-1">
                                <LineItemPrice region={cart.region} item={item} />
                                <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-grey-15">
                                    <CartEditQuantity lineId={item.id} quantity={item.quantity} type="minus" />
                                    <p className="w-6 text-center">
                                        <span className="w-full text-sm">{item.quantity}</span>
                                    </p>
                                    <CartEditQuantity lineId={item.id} quantity={item.quantity} type="plus" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <CartFooter cart={cart} />
        </>
    )
}

{/* <li key={item.id} className="flex p-2 rounded-sm bg-grey-19 border-b border-grey-17">
    <Thumbnail thumbnail={item.thumbnail} size="cart" className="border border-grey-17" />
    <div className="ml-2 w-full">
        <div className="flex justify-between gap-x-2 text-sm font-medium">
            <h3 className='text-truncate'>
                <LocalizedClientLink href={`/product/${item.variant.product.handle}`}>
                    {item.title}
                </LocalizedClientLink>
            </h3>
            <LineItemPrice region={cart.region} item={item} />
        </div>
        <div className="flex justify-between">
            <LineItemOptions variant={item.variant} quantity={item.quantity} />
            <DeleteButton id={item.id} />
        </div>
    </div>
</li> */}