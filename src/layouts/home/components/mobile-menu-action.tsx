"use client"

import { useSlideMenu } from "@libs/contexts/use-slide-menu"

type mobileMenuAction = {
    className: string
} & React.PropsWithChildren

export default function MobileMenuAction({ children, className }: mobileMenuAction) {
    const { mobileMenuClose } = useSlideMenu()

    return (
        <div onClick={mobileMenuClose} className={className}>
            {children}
        </div>
    )
}