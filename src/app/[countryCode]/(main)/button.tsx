"use client"

import Spinner from "@icons/spinner"
import { addToCart } from "@modules/cart/actions"
import { useState } from "react"


export default function CARTBUTTON({ countryCode }: { countryCode: string }) {
    const [isAdding, setIsAdding] = useState(false)
    const variantId = 'variant_01HN05PAPKVYDCQ9DJKS1SR5C9'
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
        <button onClick={() => handleAddToCart({ variantId, quantity, countryCode })}>
            {isAdding ? <Spinner /> : 'Add to Cart'}
        </button>
    )
}