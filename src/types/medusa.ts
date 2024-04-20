import { Region as MedusaRegion, ProductVariant, ProductCategory as MedusaProductCategory } from "@medusajs/medusa"

export type Variant = Omit<ProductVariant, "beforeInsert">

export type ProductCategory = Omit<MedusaProductCategory, "beforeInsert">

export interface Region extends Omit<MedusaRegion, "beforeInsert"> { }

export type CalculatedVariant = ProductVariant & {
    calculated_price: number
    calculated_price_type: "sale" | "default"
    original_price: number
}