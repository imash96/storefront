import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

export default function ProductInfoTab({ product }: { product: PricedProduct }) {
    return (
        <div className="pointer-events-none w-full">
            <div className="text-sm py-4">
                <div className="grid grid-cols-2 gap-x-8">
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <span className="font-semibold">Material</span>
                            <p>{product.material ? product.material : '-'}</p>
                        </div>
                        <div>
                            <span className="font-semibold">Country of origin</span>
                            <p>{product.origin_country ? product.origin_country : '-'}</p>
                        </div>
                        <div>
                            <span className="font-semibold">Type</span>
                            <p>{product.type?.value ? product.type.value : '-'}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <span className="font-semibold">Weight</span>
                            <p>{product.weight ? product.weight : '-'}</p>
                        </div>
                        <div>
                            <span className="font-semibold">Dimensions</span>
                            <p>{product.length ? product.length : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}