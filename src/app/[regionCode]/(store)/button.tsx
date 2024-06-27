"use client"

import Spinner from "@/icons/spinner"
import { addToCart } from "@/modules/cart/actions"
import { useState } from "react"


export default function CARTBUTTON({ regionCode, className }: { regionCode: string, className: string }) {
    const [isAdding, setIsAdding] = useState(false)
    const variantIds = [
        'variant_01J17H38E53ZVMVF92RB4D544B',
        'variant_01J17H244YKMDTNECW96QDSG01',
        'variant_01J17H0M1T5M3HHJESKT03CRSS',
        'variant_01J17GZJKRJ8FP6B53VNGHX903',
        'variant_01J17GY9Y1KRBV4386MGW1NFGB',
        'variant_01J17GX4J0RZM895FGESFTVKVX',
        'variant_01J17GW4A2901GG4B99D8NQT61',
        'variant_01J17GTVQZDVNDBRZN9DZW29GG'
    ]
    const variantId = variantIds[Math.floor(Math.random() * variantIds.length)]
    const quantity = 1
    const handleAddToCart = async ({ variantId, quantity, regionCode }: { variantId: string, quantity: number, regionCode: string }) => {
        if (!variantId) return null
        setIsAdding(true)
        await addToCart({
            variantId,
            quantity,
            regionCode,
        })
        setIsAdding(false)
    }
    return (
        <button onClick={() => handleAddToCart({ variantId, quantity, regionCode })} className={className}>
            {isAdding ? <Spinner /> : 'Add to Cart'}
        </button>
    )
}