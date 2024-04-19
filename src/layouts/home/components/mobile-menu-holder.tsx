"use client"

import XMarkIcon from "@icons/x-mark"
import { useSlideMenu } from "@libs/contexts/use-slide-menu"
import CountrySelect from "./country-select"
import User from "@icons/user"
import MagnifyingGlassIcon from "@icons/magnifying-glass"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/localized-client-link"

export default function MobileMenuHolder({ children, regions }: { regions: Region[] | null } & React.PropsWithChildren) {

    const { menuState, mobileMenuClose } = useSlideMenu()

    return (
        <div id="side-menu" className={`fixed inset-0 z-30 lg:hidden ${menuState ? "Mopen" : ''}`}>
            <div id="side-menu-curtain" className="absolute inset-0 z-30 bg-curtain" onClick={mobileMenuClose} />
            <div className="absolute inset-0 z-40 flex w-11/12 sm:w-5/6 max-w-md border-r border-grey-18">
                <div className="relative flex w-full flex-col shadow-xl bg-scroll bg-naviBg text-grey-83">
                    <div className="flex justify-between px-4 py-3 sticky top-0 border-b border-grey-18 z-10 bg-main">
                        <button type="button" className="-m-2 items-center rounded-md p-2" onClick={mobileMenuClose}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 fill-none" aria-hidden="true" />
                        </button>
                        <div className="md:hidden">
                            {regions && <CountrySelect regions={regions} />}
                        </div>
                    </div>
                    {children}
                    <div className="flex justify-between px-4 py-3 sticky bottom-0 border-t border-grey-18 z-10 bg-main">
                        {/* Account */}
                        <LocalizedClientLink href="/account" className="p-2 hover:text-grey-83 active:text-grey-84 ml-4 md:hidden" onClick={mobileMenuClose}>
                            <span className="sr-only">Account</span>
                            <User className="h-6 w-6 fill-none stroke-text hover:text-grey-83 active:text-grey-84" aria-hidden="true" />
                        </LocalizedClientLink>
                        {/* Search */}
                        <LocalizedClientLink href="#" className="p-2 hover:text-grey-83 active:text-grey-84 ml-4 cursor-pointer xm:hidden" onClick={mobileMenuClose}>
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon className="h-6 w-6 fill-none stroke-text hover:text-grey-83 active:text-grey-84" aria-hidden="true" />
                        </LocalizedClientLink>
                    </div>
                </div>
            </div>
        </div>
    )
}