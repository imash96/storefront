import LocalizedClientLink from "@modules/common/localized-client-link"
import MobileMenuAction from "./mobile-menu-action"
import MobileMenuContact from "./mobile-menu-contact"
import MobileMenuTab from "./mobile-menu-tab"
import { medusaClient } from "@libs/config"
import { ProductCategory } from "@medusajs/medusa"
import { getRandomCategory } from "@libs/utils/get-random"
import { pages } from "./header-content"

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
        <div className="overflow-y-auto bg-grey-18/90 mb-auto px-4 h-full">
            <MobileMenuTab categories={new_category} />
            <MobileMenuAction className="border-t border-grey-14 text-sm font-medium text-grey-81">
                {Object.entries(pages).map(([name, href]) => (
                    <LocalizedClientLink key={name} href={href} className="block w-full px-4 py-4 rounded-sm  hover:bg-grey-20/90 active:bg-grey-19 ">
                        {name}
                    </LocalizedClientLink>
                ))}
            </MobileMenuAction>
            <div className="flex flex-col gap-y-2 border-t border-grey-14 py-6 font-normal">
                <MobileMenuContact />
            </div>
        </div>
    )
}