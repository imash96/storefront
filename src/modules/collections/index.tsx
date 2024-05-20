import { medusaClient } from "@libs/config"


export default async function Collection({ regionCode, handle }: { regionCode: string, handle: string }) {
    const { collections } = await medusaClient.collections.list({
        handle: [handle],
    })
    const collection = collections[0]
    return (
        <div>{regionCode}: {JSON.stringify(collection)}</div>
    )
}