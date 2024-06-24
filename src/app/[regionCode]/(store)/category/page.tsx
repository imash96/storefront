import { medusaClient } from "@/libs/config"
import HomeProduct from "@/modules/home/components/home-product"

export default async function Page() {
    const { product_categories } = await medusaClient.productCategories.list({
        parent_category_id: 'null',
        include_descendants_tree: false,
        expand: 'products'
    })
    return (
        <>
            {product_categories.map(product_categorie => (
                <HomeProduct key={product_categorie.id} products={product_categorie.products} title={product_categorie.name} href={`/category/${product_categorie.handle}`} />
            ))}
        </>
    )
}