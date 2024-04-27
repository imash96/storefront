"use client"

import Bars3Icon from "@icons/3bar"
import { useSlideMenu } from "@libs/contexts/use-slide-menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const homeRegex = /^\/[a-z]{2}$/

export default function HeaderHolder({ children }: React.PropsWithChildren) {
    const { mobileMenuOpen } = useSlideMenu()
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isHome, setIsHome] = useState<boolean>(false)
    const pathname = usePathname()
    
    useEffect(() => { homeRegex.test(pathname) ? setIsHome(true) : setIsHome(false) }, [pathname])

    const detectScrollY = () => window.scrollY > 35 ? setIsScrolled(true) : setIsScrolled(false)
    useEffect(() => {
        document.addEventListener('scroll', detectScrollY);
        return () => {
            document.removeEventListener('scroll', detectScrollY);
        };
    });
    return (
        <header className={`sticky top-0 z-20 hover:bg-grey-19 transition-colors duration-500 ${isScrolled ? 'shadow-sm shadow-grey-7 bg-grey-19' : isHome ? 'bg-transparent' : 'bg-grey-19'}`}>
            <nav aria-label="nav" className="mx-auto max-w-7xl px-4 sm:px-6 xm:px-8 border-none flex h-[4.5rem] items-center text-grey-81">
                <button type="button" onClick={mobileMenuOpen} className="rounded-md p-2 xm:hidden">
                    <Bars3Icon className="h-7 w-7" />
                </button>
                {children}
            </nav>
        </header>
    )
}