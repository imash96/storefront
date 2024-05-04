import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductInfoTab from "../components/tab-product-info"
import ShippingInfoTab from "../components/tab-shipping-info"
import Accordion from "@modules/common/accordion"

export default function ProductTabs({ product }: { product: PricedProduct }) {
    const tabs = [
        {
            id: "info",
            label: "Product Information",
            component: <ProductInfoTab product={product} />,
        },
        {
            id: "policy",
            label: "Shipping & Returns",
            component: <ShippingInfoTab />,
        },
    ]

    return (
        <>
            {tabs.map((tab) => (
                <Accordion title={tab.label} key={tab.id}>
                    {tab.component}
                </Accordion>
            ))}
        </>
    )
}