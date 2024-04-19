import LocalizedClientLink from "@modules/common/localized-client-link"
import MobileMenuAction from "./mobile-menu-action"
import MobileMenuContact from "./mobile-menu-contact"


export default function MobileMenuServer() {
    return (
        <div className="overflow-y-auto bg-grey-21/80 mb-auto px-4 h-full">
            <MobileMenuAction className="border-t border-grey-17 py-2 text-sm font-medium">
                {Object.entries(pages).map(([name, href]) => (
                    <div key={name} className="py-px text-left text-grey-81">
                        <LocalizedClientLink href={href} className="block w-full hover:bg-grey-20/80 active:bg-grey-19 px-4 py-3 rounded-sm">
                            {name}
                        </LocalizedClientLink>
                    </div>
                ))}
            </MobileMenuAction>
            <div className="space-y-2 border-t border-grey-17 py-4 font-normal">
                <MobileMenuContact />
            </div>
        </div>
    )
}

const pages = {
    "KID": "/kid",
    "PILLOW": "/pillow",
    "ACCESSORIES": "/accessories",
    "TRAVEL BAGS": "/travel-bags",
}