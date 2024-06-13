"use client"

import { ProductCategory } from "@medusajs/medusa";
import { useState } from "react";
import MobileMenuAction from "./mobile-menu-action";
import LocalizedClientLink from "@/modules/common/localized-client-link";
import { features, featuresType } from "./header-content";
import Image from "next/image";


export default function MobileMenuTab({ categories }: { categories: ProductCategory[] }) {
    const [currentTab, setCurrentTab] = useState<string>('Men');
    return (
        <>
            <div className="flex gap-x-3 mt-2 border-b border-grey-17">
                <div className="-mb-px flex gap-x-8 px-4 w-full">
                    {categories.map((category) => (
                        <button key={category.id} className={`flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium transition-color duration-150 ease-in-out ${currentTab === category.name ? 'text-blue-4 border-blue-5' : 'text-grey-81 border-transparent'}`} onClick={() => setCurrentTab(category.name)}>
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
            {categories.map((category) => (
                currentTab === category.name && <div key={category.id} className="text-left text-sm font-medium">
                    <div className="grid grid-cols-2 gap-x-4 p-4">
                        {(features as featuresType)[category.name].map((item) => (
                            <div key={item.id} className="group aspect-w-1 aspect-h-1 relative overflow-clip rounded-md bg-gray-18 shadow-md">
                                <Image src={item.imageSrc} width={100} height={100} alt={item.imageAlt} className="object-cover object-center group-hover:opacity-75 h-full w-full" />
                                <div className="flex flex-col justify-end">
                                    <div className="bg-grey-22 bg-opacity-60 p-3 text-sm sm:text-xs">
                                        <LocalizedClientLink href={item.href} className="block font-medium text-gray-82">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {item.name}
                                        </LocalizedClientLink>
                                        <p aria-hidden="true" className="mt-0.5 text-gray-84 sm:mt-1">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MobileMenuAction className="text-grey-83 divide-y divide-grey-16">
                        {category.category_children.map((child_cat) => (
                            <LocalizedClientLink key={child_cat.id} href={`/category/${child_cat.handle}`} className="block w-full hover:bg-grey-20/90 active:bg-grey-19 px-4 py-4 rounded-sm">
                                {child_cat.name}
                            </LocalizedClientLink>
                        ))}
                        <LocalizedClientLink href={`/category/${category.handle}`} className="block w-full hover:bg-grey-20/80 active:bg-grey-19 px-4 py-4 rounded-sm">
                            View all
                        </LocalizedClientLink>
                    </MobileMenuAction>
                </div>
            ))}
        </>
    )
}