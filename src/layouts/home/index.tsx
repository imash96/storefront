import { listRegions } from "@libs/data"
import NavBar from "./templates/nav-bar"
import Header from "./templates/header"
import SlideMenuProvider from "@libs/contexts/use-slide-menu"
import CartMenu from "./templates/cart-menu"
import { enrichLineItems, retrieveCart } from "@modules/cart/actions"
import { LineItem } from "@medusajs/medusa"
import Footer from "./templates/footer"
import MobileMenu from "./templates/mobile-menu"

const fetchCart = async () => {
    const cart = await retrieveCart()

    if (cart?.items.length) {
        const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
        cart.items = enrichedItems as LineItem[]
    }

    return cart
}

export default async function HomeLayout({ children }: Readonly<React.PropsWithChildren>) {
    const regions = await listRegions()
    const cart = await fetchCart()
    return (
        <SlideMenuProvider>
            <NavBar regions={regions} />
            <Header />
            <MobileMenu regions={regions} />
            <CartMenu cart={cart} />
            {children}
            <Footer />
        </SlideMenuProvider>
    )
}