import type { ProductVariant } from "@medusajs/medusa"

type LineItemOptionsProps = { variant: ProductVariant, quantity?: number }

const LineItemOptions = ({ variant, quantity }: LineItemOptionsProps) => {
    return (
        <span className="inline-block text-sm text-grey-85 w-full overflow-hidden text-ellipsis">
            {variant.title}
        </span>
    )
}

export default LineItemOptions
