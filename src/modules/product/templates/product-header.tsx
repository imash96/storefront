import { ProductCategory } from "@medusajs/medusa";
import ProductBreadcrumb from "../components/product-breadcrumb";


const ProductHeader = ({ cat }: { cat: ProductCategory[] | undefined }) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-3 px-1'>
            <ProductBreadcrumb cat={cat} />
        </div>
    )
}

export default ProductHeader;