"use client"

import { ProductCategory } from "@medusajs/medusa";
import LocalizedClientLink from "@modules/common/localized-client-link"
import { useState } from "react";
import MobileMenuAction from "./mobile-menu-action";

export default function MobileMenuTab({ categories }: { categories: ProductCategory[] }) {
    const [currentTab, setCurrentTab] = useState<string>('MEN');

    return (
        <>
            <div id="tabs" className="flex gap-x-3">
                {categories.map((category) => (
                    <button key={category.id} className={`flex-1 whitespace-nowrap border-b-2 py-4 font-medium transition-color duration-150 ease-in-out ${currentTab === category.name ? 'text-blue-4 border-blue-5' : 'text-grey-11 border-transparent'}`} onClick={() => setCurrentTab(category.name)}>
                        {category.name}
                    </button>
                ))}
            </div >
            {categories.map((category) => (
                currentTab === category.name && <div key={category.id} className="pb-2 text-left text-sm font-medium">
                    <div className="divide-y divide-grey-6 text-grey-33">
                        {category.category_children.map((child_cat) => (
                            <MobileMenuAction key={child_cat.id} className="py-2">
                                <LocalizedClientLink href={`/category/${child_cat.handle}`} className="block w-full hover:bg-grey-9/80 active:bg-grey-8 px-4 py-3 rounded-sm">
                                    {child_cat.name}
                                </LocalizedClientLink>
                            </MobileMenuAction>
                        ))}
                        <MobileMenuAction className="py-2">
                            <LocalizedClientLink href={`/category/${category.handle}`} className="block w-full hover:bg-grey-9/50 active:bg-grey-8 px-4 py-3 rounded-sm">
                                View all
                            </LocalizedClientLink>
                        </MobileMenuAction>
                    </div>
                </div>
            ))}
        </>
    )
}