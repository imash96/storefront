"use client"

import Spinner from "@icons/spinner"
import { addToCart } from "@modules/cart/actions"
import { useState } from "react"


export default function CARTBUTTON({ countryCode, className }: { countryCode: string, className: string }) {
    const [isAdding, setIsAdding] = useState(false)
    const variantIds = [
        'variant_01HW35G3NEMN9QNW6TZHGH1G1D',
        'variant_01HW34CHH9KDZRBTW069PXPBXJ',
        'variant_01HW34D0EGWBT1WD6WMDEBHNTT',
        'variant_01HW34DF920KZ2DHPA0RQPCGEH',
        'variant_01HW34BM87CTGERWN3DGF7S7QW',
        'variant_01HW34ED5C8CB86DHM2E21WB72',
        'variant_01HW34EWFFPECBN2NNWV74EFHS',
        'variant_01HW34DY6581NKD9HQ76W0ETQM'
    ]
    const variantId = variantIds[Math.floor(Math.random() * variantIds.length)]
    const quantity = 1
    const handleAddToCart = async ({ variantId, quantity, countryCode }: { variantId: string, quantity: number, countryCode: string }) => {
        if (!variantId) return null
        setIsAdding(true)
        await addToCart({
            variantId,
            quantity,
            countryCode,
        })
        setIsAdding(false)
    }
    return (
        <button onClick={() => handleAddToCart({ variantId, quantity, countryCode })} className={className}>
            {isAdding ? <Spinner /> : 'Add to Cart'}
        </button>
    )
}