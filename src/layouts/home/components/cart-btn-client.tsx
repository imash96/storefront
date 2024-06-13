"use client"

import { useSlideMenu } from "@/libs/contexts/use-slide-menu"

export default function CartButtonClient({ children }: React.PropsWithChildren) {
    const { cartMenuOpen } = useSlideMenu()
    return (
        <button onClick={cartMenuOpen} className="flex items-center hover:text-grey-55 hover:bg-grey-8">
            {children}
        </button>
    )
}