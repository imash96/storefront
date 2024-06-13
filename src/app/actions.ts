"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { getRegion, updateCart } from "@/libs/data"

/**
 * Updates the regionCode param and revalidates the regions cache
 * @param regionId
 * @param regionCode
 */
export async function updateRegion(regionCode: string, currentPath: string) {
    const cartId = cookies().get("_cart_id")?.value
    const region = await getRegion(regionCode)

    if (!region) {
        return null
    }

    try {
        if (cartId) {
            await updateCart(cartId, { region_id: region.id })
            revalidateTag("cart")
        }

        revalidateTag("regions")
        revalidateTag("products")
    } catch (e) {
        return "Error updating region"
    }

    redirect(`/${regionCode}${currentPath}`)
}