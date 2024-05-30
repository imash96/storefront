import { useState } from "react"

import { deleteLineItem } from "@modules/cart/actions"
import Spinner from "@icons/spinner"
import TrashIcon from "@icons/trash"

const DeleteButton = ({
    id,
    children,
    className,
}: {
    id: string
    children?: React.ReactNode
    className?: string
}) => {
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = async (id: string) => {
        setIsDeleting(true)
        await deleteLineItem(id).catch((err) => {
            setIsDeleting(false)
        })
    }

    return (
        <div className={`flex items-center justify-between text-small-regular ${className}`}>
            <button
                className="flex gap-x-1 text-grey-83 hover:text-grey-81 cursor-pointer"
                onClick={() => handleDelete(id)}
            >
                {isDeleting ? <Spinner className="animate-spin" /> : <TrashIcon />}
                <span>{children}</span>
            </button>
        </div>
    )
}

export default DeleteButton
