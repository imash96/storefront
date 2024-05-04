import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

export default function ProductInfoTab({ product }: { product: PricedProduct }) {
    return (
        <div className="pointer-events-none w-full text-grey-83">
            <div className="text-sm py-4">
                <div className="grid grid-cols-2 gap-x-8">
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <span className="font-semibold text-grey-81">Material</span>
                            <p>{product.material ? product.material : '-'}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-grey-81">Country of origin</span>
                            <p>{product.origin_country ? product.origin_country : '-'}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-grey-81">Type</span>
                            <p>{product.type?.value ? product.type.value : '-'}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <span className="font-semibold text-grey-81">Weight</span>
                            <p>{product.weight ? product.weight : '-'}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-grey-81">Dimensions</span>
                            <p>{product.length ? product.length : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}