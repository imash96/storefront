import { medusaClient } from "@/libs/config";
import { getRegion } from "@/libs/data";
import HomeProduct from "../components/home-product";

export default async function Promotion({ regionCode }: { regionCode: string }) {
    const region = await getRegion(regionCode)

    if (!region) {
        return null
    }
    const { products } = await medusaClient.products.list({
        limit: 4,
        region_id: region.id
    })
    return (
        <HomeProduct title="Trending Products" products={products} href="/collections/trending-products" />
    )
}