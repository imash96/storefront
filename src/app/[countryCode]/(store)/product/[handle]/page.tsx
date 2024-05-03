import { getProductByHandle, getRegion, retrievePricedProductById } from "@libs/data";
import { notFound } from "next/navigation";
import type { Region } from "@medusajs/medusa"
import Product from "@modules/product";

type Props = {
    params: {
        countryCode: string;
        handle: string
    }
}

const getPricedProductByHandle = async (handle: string, region: Region) => {
    const { product } = await getProductByHandle(handle, region.id).then(
        (product) => product
    )

    return product
}

export default async function Page({ params }: Props) {
    const region = await getRegion(params.countryCode)

    if (!region) {
        notFound()
    }

    const pricedProduct = await getPricedProductByHandle(params.handle, region)

    if (!pricedProduct) {
        notFound()
    }

    return (
        <Product product={pricedProduct} countryCode={params.countryCode} region={region} />
    )
}