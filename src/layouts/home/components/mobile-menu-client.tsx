"use client"

import XMarkIcon from "@/icons/x-mark"
import { useSlideMenu } from "@/libs/contexts/use-slide-menu"
import { Region } from "@medusajs/medusa"
import CountrySelect from "./country-select"
import LocalizedClientLink from "@/modules/common/localized-client-link"
import UserIcon from "@/icons/user"
import Search from "@/icons/search"


export default function MobileMenuClient({ children, regions }: { regions: Region[] | null } & React.PropsWithChildren) {
    const { menuState, mobileMenuClose } = useSlideMenu()
    return (
        <div className={`fixed inset-0 z-30 lg:hidden ${menuState ? "animate-slide-in-menu " : "animate-slide-out-menu"}`} style={{ transform: `${menuState ? 'translate(0%)' : 'translate(-100%)'}` }}>
            <div className={`absolute inset-0 z-30 bg-curtain transition-opacity duration-500 ease-in-out delay-[0.35s] ${menuState ? "opacity-25" : "opacity-0"}`} onClick={mobileMenuClose} />
            <div className="absolute inset-0 z-40 flex w-11/12 sm:w-5/6 max-w-md border-r border-grey-21">
                <div className="relative flex w-full flex-col shadow-xl bg-scroll bg-naviBg text-grey-83 bg-grey-20">
                    <div className="flex justify-between px-4 py-3 sticky top-0 border-b border-grey-16 z-10 bg-grey-18">
                        <button type="button" className="-m-2 items-center rounded-md p-2" onClick={mobileMenuClose}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 fill-none" aria-hidden="true" />
                        </button>
                        <div className="md:hidden">
                            {regions && <CountrySelect regions={regions} />}
                        </div>
                    </div>
                    {children}
                    <div className="flex justify-between px-4 py-3 sticky bottom-0 border-t border-grey-16 z-10 bg-grey-18">
                        {/* Account */}
                        <LocalizedClientLink href="/account" className="p-2 hover:text-grey-83 active:text-grey-85 ml-4 md:hidden" onClick={mobileMenuClose}>
                            <span className="sr-only">Account</span>
                            <UserIcon className="h-6 w-6 fill-none stroke-text hover:text-grey-83 active:text-grey-85" aria-hidden="true" />
                        </LocalizedClientLink>
                        {/* Search */}
                        <a href="#" className="p-2 hover:text-grey-83 active:text-grey-85 ml-4 cursor-pointer xm:hidden" onClick={mobileMenuClose}>
                            <span className="sr-only">Search</span>
                            <Search className="h-6 w-6 fill-none stroke-text hover:text-grey-83 active:text-grey-85" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}