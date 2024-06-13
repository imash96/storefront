import { Region } from "@medusajs/medusa";
import CountrySelect from "../components/country-select";
import LocalizedClientLink from "@/modules/common/localized-client-link";

export default function NavBar({ regions }: { regions: Region[] | null }) {
    return (
        <div className="bg-sameBg text-sameText text-xs xs:text-sm xs:font-medium">
            <div className="max-w-7xl mx-auto h-9 px-4 flex items-center justify-between md:px-6 lg:px-8">
                <div className="w-full md:w-6/12">
                    <ul className="flex justify-center md:justify-start gap-x-6">
                        {Object.entries(navBarData).map(([name, href]) => (
                            <li key={name} className="link cursor-pointer">
                                <LocalizedClientLink href={href}>{name}</LocalizedClientLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block md:w-6/12">
                    {regions && <CountrySelect regions={regions} />}
                </div>
            </div>
        </div>
    )
}

const navBarData = {
    "ABOUT US": "/about-us",
    "CONTACT US": "/contact-us",
    "FAQS": "/faqs",
    "BLOG": "/blogs"
}