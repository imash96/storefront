import MinusIcon from "@icons/minus";
import PlusIcon from "@icons/plus";
import Spinner from "@icons/spinner"
import { updateLineItem } from "@modules/cart/actions";
import { useState } from 'react'

export default function CartEditQuantity({ lineId, quantity, type }: { lineId: string; quantity: number, type: 'plus' | 'minus'; }) {
    const [isPending, setTransition] = useState<boolean>(false);
    const handleClick = async () => {
        setTransition(true)
        await updateLineItem({ lineId, quantity: type === 'plus' ? quantity + 1 : quantity - 1 })
        setTransition(false)
    }
    return (
        <button aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'} onClick={handleClick} disabled={isPending} className={`group flex h-full min-w-[36px] max-w-[36px] hover:bg-grey-18 flex-none active:bg-grey-15 items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-grey-18 hover:opacity-80 ${isPending ? 'cursor-not-allowed' : ''} ${type === 'minus' ? 'ml-auto' : ''}`} >
            {isPending ? (<Spinner width={18} />) : type === 'plus' ? (<PlusIcon className='group-hover:text-text-active-h' width={18} />) : (<MinusIcon className='group-hover:text-text-active-h' width={18} />)}
        </button >
    )
}