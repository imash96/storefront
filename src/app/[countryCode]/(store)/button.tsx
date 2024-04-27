"use client"

import Spinner from "@icons/spinner"
import { addToCart } from "@modules/cart/actions"
import { useState } from "react"


export default function CARTBUTTON({ countryCode, className }: { countryCode: string, className: string }) {
    const [isAdding, setIsAdding] = useState(false)
    const variantIds = [
        'variant_01HWF8D5W722TJVCRVSBAHCF7Z',
        'variant_01HWF8E1N7WWB9MCDZ0QESVDD7',
        'variant_01HWF8EG9MXQ8PHZT0X43F7XWY',
        'variant_01HWF8EYYFGJRKDCXG2523GSHB',
        'variant_01HWF8FDYVEN4A4S23BRGSD13E',
        'variant_01HWF8FWFPTDRNT8GG313P5AY5',
        'variant_01HWF8GB2J1XBRTBD1JPWHYFKF',
        'variant_01HWF8FZAXJJNBWQJBA3PV9CSP'
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