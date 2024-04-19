import LocalizedClientLink from "@modules/common/localized-client-link"
import MobileMenuAction from "./mobile-menu-action"
import MobileMenuContact from "./mobile-menu-contact"
import MobileMenuTab from "./new-mobile-menu-tab"
import { medusaClient } from "@libs/config"
import { ProductCategory } from "@medusajs/medusa"
import { getRandomCategory } from "@libs/utils/get-random"

export default async function MobileMenuServer() {
    const { product_categories } = await medusaClient.productCategories.list({ parent_category_id: "null", include_descendants_tree: true }, { next: { tags: ["categories"] } })
    const main_category: ProductCategory[] = []
    main_category.push(product_categories[0])
    main_category.push(product_categories[1])
    const new_category: ProductCategory[] = []
    new_category[0] = {
        ...main_category[0],
        category_children: getRandomCategory(main_category[0].category_children, 12)
    } as ProductCategory
    new_category[1] = {
        ...main_category[1],
        category_children: getRandomCategory(main_category[1].category_children, 12)
    } as ProductCategory
    return (
        <div className="overflow-y-auto bg-grey-21/80 mb-auto px-4 h-full">
            <MobileMenuTab categories={new_category} />
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