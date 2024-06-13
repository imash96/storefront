import { getProductByHandle, getRegion, retrievePricedProductById } from "@/libs/data";
import { notFound } from "next/navigation";
import type { Region } from "@medusajs/medusa"
import Product from "@/modules/product";

type Props = {
    params: {
        regionCode: string;
        handle: string
    }
}

type payloadType = {
    id?: string,
    handle?: string,
    expand?: string
    regionId?: string
}

const getPricedProductByHandle = async (handle: string, region: Region) => {
    let payload: payloadType = {}
    handle.startsWith('prod_') ? (payload['id'] = handle) : (payload['handle'] = handle)
    const expand = 'variants,options,options.values,variants.prices,variants.options,collection,tags,type,images,sales_channels,categories'
    payload['regionId'] = region.id
    const { product } = await getProductByHandle(handle, region.id, expand).then(
        (product) => product
    )

    return product
}

export default async function Page({ params }: Props) {
    const region = await getRegion(params.regionCode)

    if (!region) {
        notFound()
    }

    const pricedProduct = await getPricedProductByHandle(params.handle, region)

    if (!pricedProduct) {
        notFound()
    }

    return (
        <Product product={pricedProduct} regionCode={params.regionCode} region={region} />
    )
}