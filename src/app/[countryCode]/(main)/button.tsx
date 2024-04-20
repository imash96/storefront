"use client"

import Spinner from "@icons/spinner"
import { addToCart } from "@modules/cart/actions"
import { useState } from "react"


export default function CARTBUTTON({ countryCode }: { countryCode: string }) {
    const [isAdding, setIsAdding] = useState(false)
    const variantIds = [
        'variant_01HSAZN4N11ETAFE4AVHS00A71',
        'variant_01HSAZJ1YRK63J8TNX8702KTP6',
        'variant_01HSAZK05W5SX2WDTXTMXTX35F',
        'variant_01HSAZKEF539GVM5BE5F2J9ZAX',
        'variant_01HSAZKSYARSHDFK2PKTTK6QHR',
        'variant_01HSAZM8AA14Q4ZX12VMWBD66E',
        'variant_01HSAZMPJ31G13AKVQKWW5JPS8'
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
        <button onClick={() => handleAddToCart({ variantId, quantity, countryCode })}>
            {isAdding ? <Spinner /> : 'Add to Cart'}
        </button>
    )
}