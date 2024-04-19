"use client"

import { useSlideMenu } from "@libs/contexts/use-slide-menu"

export default function CartExploreButton({ children, className }: { className?: string } & React.PropsWithChildren) {
    const { cartMenuClose } = useSlideMenu()
    return (
        <>
            <span className="sr-only">Go to all products page</span>
            <span onClick={cartMenuClose} className={className ? className : ''}>{children}</span>
        </>
    )
}