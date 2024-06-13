import { medusaClient } from "@/libs/config";
import { getRegion } from "@/libs/data";
import HomeProduct from "../components/home-product";

export default async function NewArrival({ regionCode }: { regionCode: string }) {
    const region = await getRegion(regionCode)

    if (!region) {
        return null
    }
    const { products } = await medusaClient.products.list({
        limit: 4,
        region_id: region.id,
        // collection_id: [""]
    })
    return (
        <HomeProduct title="New Arrivals" products={products} />
    )
}