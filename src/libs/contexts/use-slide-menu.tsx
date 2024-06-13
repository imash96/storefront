"use client"

import { createContext, useContext } from "react"
import useToggleState from "@/libs/hooks/use-toggle-state"
import { allowScroll, blockScroll } from "@/libs/utils/toggle-scroll"

type SlideMenuContext = {
    menuState: boolean
    mobileMenuOpen: () => void
    mobileMenuClose: () => void

    cartState: boolean
    cartMenuOpen: () => void
    cartMenuClose: () => void
}

export const SlideMenuContext = createContext<SlideMenuContext | null>(null)

export default function SlideMenuProvider({ children }: React.PropsWithChildren) {
    const { state: menuState, open: menuOpen, close: menuClose } = useToggleState()
    const { state: cartState, open: cartOpen, close: cartClose } = useToggleState()

    const mobileMenuOpen = () => {
        menuOpen();
        blockScroll();
    }

    const mobileMenuClose = () => {
        menuClose();
        allowScroll();
    }

    const cartMenuOpen = () => {
        cartOpen();
        blockScroll();
    }

    const cartMenuClose = () => {
        cartClose();
        allowScroll();
    }

    return (
        <SlideMenuContext.Provider value={{ menuState, mobileMenuClose, mobileMenuOpen, cartState, cartMenuClose, cartMenuOpen }}>
            {children}
        </SlideMenuContext.Provider>
    )
}

export function useSlideMenu() {
    const context = useContext(SlideMenuContext)

    if (context === null) throw new Error("useSlideMenu must be used within a SlideMenuProvider")

    return context
}