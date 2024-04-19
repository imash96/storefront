import MobileMenuServer from "../components/mobile-menu-content";
import MobileMenuClient from "../components/mobile-menu-holder";
import type { Region } from "@medusajs/medusa";

export default function MobileMenu({ regions }: { regions: Region[] | null }) {
    return (
        <MobileMenuClient regions={regions}>
            <MobileMenuServer />
        </MobileMenuClient>
    )
}