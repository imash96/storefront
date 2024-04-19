import { ProductCategoryDTO } from "@medusajs/types";
import { useState } from "react";


export default function MobileMenuTab({ categories }: { categories: ProductCategoryDTO[] }) {
    const [currentTab, setCurrentTab] = useState<'MEN' | 'WOMEN'>('MEN');
    return (
        <>
            <div id="tabs" className="flex gap-x-3">

            </div>
        </>
    )
}