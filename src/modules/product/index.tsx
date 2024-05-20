import type { Region } from "@medusajs/medusa"
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { notFound } from "next/navigation"
import ProductSlider from "./templates/product-slider"
import ProductInfo from "./templates/product-info"
import ProductActions from "./templates/product-action"
import ProductInfoTab from "./components/tab-product-info"
import ShippingInfoTab from "./components/tab-shipping-info"
import Divider from "@modules/common/divider"
import ProductHeader from "./templates/product-header"
import CreateSection from "@modules/common/create-section"
import Accordion from "@modules/common/accordion"
import { uspData } from "@modules/home/templates/uspt"

type productProps = {
    product: PricedProduct
    region: Region
    regionCode?: string
}

export default function Product({ product, region }: productProps) {
    if (!product || !product.id) {
        return notFound()
    }
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
            <CreateSection sectionName="product" className="xl:px-0">
                <ProductHeader cat={product.categories} />
                <div className="grid grid-cols-12">
                    <div className="col-span-12 flex flex-col self-start lg:sticky top-0 w-full gap-3 md:flex-row-reverse lg:col-span-7">
                        <ProductSlider images={product?.images || []} />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-3 w-full pt-6 lg:px-4 lg:pt-0 lg:col-span-5">
                        <ProductInfo title={product.title} description={product.description} brand={product.brand} />
                        <Divider />
                        <ProductActions product={product} region={region} />
                        <div>
                            {tabs.map((tab) => (
                                <Accordion title={tab.label} key={tab.id}>
                                    {tab.component}
                                </Accordion>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                            {uspData.map((usp) => (
                                <div key={usp.name} className="flex text-grey-83">
                                    <div className="w-20 mx-0">
                                        <usp.icon width={80} col={{ stroke: "rgb(var(--gray-11))" }} style={{ ...usp.type }} />
                                    </div>
                                    <div className="flex flex-col justify-center align-middle ml-2 text-left uppercase">
                                        <h3 className="text-sm font-bold tracking-wider text-grey-81">{usp.name}</h3>
                                        <p className="font-normal text-xs">{usp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CreateSection>
            <CreateSection sectionName="product-description">
                <Divider />
                <div>
                    Description
                </div>
            </CreateSection>
            <CreateSection sectionName="related-product">

                <Divider />
                <div>
                    Related Product
                </div>
            </CreateSection>
            <CreateSection sectionName="product-review">
                <Divider />
                <div>
                    Product Review
                </div>
            </CreateSection>
        </>
    )
}