import type { Region } from "@medusajs/medusa";
import MobileMenuClient from "../components/new-mobile-menu-client";
import MobileMenuServer from "../components/new-mobile-menu-server";


export default function MobileMenu({ regions }: { regions: Region[] | null }) {
    return (
        <MobileMenuClient regions={regions}>
            <MobileMenuServer />
        </MobileMenuClient>
    )
}