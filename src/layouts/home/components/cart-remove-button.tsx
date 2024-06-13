import CloseIcon from "@/icons/close"
import Spinner from "@/icons/spinner"
import { deleteLineItem } from "@/modules/cart/actions";
import { useState } from 'react'

type buttonProp = {
    itemId: string,
    className?: string
    type?: 'default' | 'cart'
}

export default function CartRemoveButton({ itemId, className, type }: buttonProp) {
    const [isPending, setTransition] = useState<boolean>(false);
    const handleClick = async () => {
        setTransition(true)
        await deleteLineItem(itemId)
        setTransition(false)
    }
    return (
        <button aria-label="Remove cart item" type="button" className={`group flex items-center justify-center rounded-full border border-grey-17 hover:bg-red-3 active:bg-red-2 transition-colors duration-200 bg-grey-17 ${isPending ? 'cursor-not-allowed px-0' : ''} ${type === 'default' ? 'h-5 w-5' : 'h-[18px] w-[18px]'} ${className ? className : ''}`} onClick={handleClick} disabled={isPending}>
            {isPending ? <Spinner width={20} /> : <CloseIcon width={20} className="group-hover:text-text-warning" />}
        </button>
    )
}