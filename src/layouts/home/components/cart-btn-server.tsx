import ShoppingCartIcon from "@icons/shopping-cart"
import { retrieveCart } from "@modules/cart/actions"

const fetchCart = async () => {
    const cart = await retrieveCart()
    return cart?.items?.reduce((acc, item) => { return acc + item.quantity }, 0) || 0
}

export default async function CartButtonServer() {
    const totalItems = await fetchCart()

    return (
        <>
            <span className="sr-only">items in cart, view bag</span>
            <ShoppingCartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <span className="ml-2 text-sm font-medium">{totalItems}</span>
        </>
    )
}