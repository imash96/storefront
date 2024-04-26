import { BaseEntity, Currency, Customer, Order, Product, Image as MedusaImage, SoftDeletableEntity } from "@medusajs/medusa"

declare enum MeasurementType {
    JACKET = "Jacket",
    PANT = "Pant",
    SUIT = "Suit",
    SHORTS = "Shorts",
    VEST = "Vest",
    TSHIRT = "T-Shirt",
    SKIRT = "Skirt",
    FLARESKIRT = "Flare Skirt",
    LONGCOAT = "Long Coat",
    KID = "Kid"
}
declare enum UserGender {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other"
}
declare enum UserFit {
    REGULAR = "Regular",
    SLIMFIT = "Slim Fit",
    OTHER = "Other"
}

export interface Measurement extends SoftDeletableEntity {
    customer: Customer;
    type: MeasurementType;
    fit: UserFit;
    name: string;
    measurement_for: string | null;
    gender: UserGender;
    height_ft: number | null;
    height_in: number | null;
    weight: number | null;
    info: string | null;
    measurements: {
        chest: number;
        sleeve: number;
        shoulder: number;
        front_length: number;
        stomach: number;
        seat: number;
        bicep: number;
        waist: number;
        thighs: number;
        knees: number;
        leg_bottom: number;
        length: number;
        front_rise: number;
        back_rise: number;
        shorts_length: number;
        vest_length: number;
        half_sleeves: number;
        skirt_length: number;
        skirt_flare: number;
    };
    metadata: Record<string, unknown>;
}

export interface FeatureDisplay extends BaseEntity {
    id: string;
    title: string | null;
    description: string | null;
    images: MedusaImage[];
    order: number;
    metadata: object | null;
    product: Product;
}

export interface ProductReview extends SoftDeletableEntity {
    customer: Customer;
    product: Product;
    rating: number;
    title: string | null;
    content: string | null;
    name: string | null;
    is_verified: boolean;
}

export interface ProductBullets extends BaseEntity {
    bullet1: string | null;
    bullet2: string | null;
    bullet3: string | null;
    bullet4: string | null;
    bullet5: string | null;
    bullet6: string | null;
    bullet7: string | null;
    bullet8: string | null;
    bullet9: string | null;
    bullet10: string | null;
}

export declare module "@medusajs/medusa/dist/models/cart" {
    declare interface Cart {
        comment: string | null
    }
}

export declare module "@medusajs/medusa/dist/models/product-collection" {
    declare interface ProductCollection {
        thumbnail: string | null
        alt: string | null
        description: string | null
        is_active: boolean
    }
}

export declare module "@medusajs/medusa/dist/models/customer" {
    declare interface Customer {
        customattribute: string | null
        measurements: Measurement[]
        reviews: Review[]
    }
}

export declare module "@medusajs/medusa/dist/models/line-item" {
    declare interface LineItem {
        is_personalized: boolean
        is_customized: boolean
        measurement_id: string | null
        measurements: Measurement
        comment: string | null;
    }
}

export declare module "@medusajs/medusa/dist/models/order" {
    declare interface Order {
        customattribute: string | null;
        review: Review
    }
}

export declare module "@medusajs/medusa/dist/models/product-category" {
    declare interface ProductCategory {
        customattribute: string;
        thumbnail: string;
        alt: string;
        description: string | null;
    }
}

export declare module "@medusajs/medusa/dist/models/product" {
    declare interface Product {
        customattribute: string | null;
        seo_description: string | null;
        brand: string | null;
        gender: string | null;
        care: string | null;
        style: string | null;
        bullets_id: string | null;
        bullets: ProductBullets;
        addon_id: string | null;
        addon: Addon | null;
        reviews: Review[];
        is_customizable: boolean;
        is_feature_displays: boolean;
        feature_displays: FeatureDisplay[];
    }
}