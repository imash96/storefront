"use client"

import XMarkIcon from "@icons/x-mark"
import { useSlideMenu } from "@libs/contexts/use-slide-menu"
import CartIcon from "@icons/cart-icon"
import type { Cart } from "@medusajs/medusa"
import CartMenuContent from "../components/cart-menu-content"
import CartExploreButton from "../components/cart-explore-button"

export default function CartMenu({ cart }: { cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null }) {
    const { cartState, cartMenuClose } = useSlideMenu()

    return (
        <div className={`fixed inset-0 z-30 ${cartState ? "animate-slide-in-cart" : "animate-slide-out-cart"}`} style={{ transform: `${cartState ? 'translate(0%)' : 'translate(100%)'}` }}>
            <div className={`absolute inset-0 z-30 bg-curtain transition-opacity duration-500 ease-in-out delay-300 ${cartState ? "opacity-25" : "opacity-0"}`} onClick={cartMenuClose} />
            <div className="absolute inset-y-0 right-0 z-40 flex w-11/12 max-w-sm border-l border-grey-16">
                <div className="relative flex w-full h-full flex-col shadow-xl bg-scroll text-grey-81 bg-grey-20">
                    <div className="flex justify-between px-4 py-3 sticky top-0 border-b border-grey-16 bg-grey-18 z-10">
                        <span className="font-semibold text-lg">Shopping Cart</span>
                        <button type="button" className="-m-2 items-center rounded-md p-2" onClick={cartMenuClose}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    {cart && cart.items?.length ?
                        <CartMenuContent cart={cart} /> :
                        <div className="flex flex-col gap-y-4 items-center justify-center my-auto mx-4">
                            <CartIcon width={64} />
                            <span className="text-center">Looks like you haven’t added anything yet, let’s get you started!</span>
                            <div>
                                <CartExploreButton className="bg-blue-1 block w-full rounded-full p-3 text-center text-sm font-medium text-grey-86 hover:text-grey-88 opacity-90 hover:opacity-100">
                                    Explore Products
                                </CartExploreButton>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}