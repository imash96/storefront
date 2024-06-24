import { Image as MedusaImage } from "@medusajs/medusa"
import PlaceholderImage from "@/icons/placeholder-image"
import Image from "next/image"
import clsx from "@/libs/utils/clsx"

type ThumbnailProps = {
    thumbnail?: string | null
    images?: MedusaImage[] | null
    size?: "cart" | "xsmall" | "small" | "medium" | "large" | "full" | "square"
    isFeatured?: boolean
    className?: string
}

export default function Thumbnail({ thumbnail, images, size = "small", isFeatured, className }: ThumbnailProps) {
    const initialImage = thumbnail || images?.[0]?.url

    return (
        <div className={clsx(
            "relative overflow-hidden p-4 bg-grey-18 shadow-grey-84 rounded-large group-hover:shadow-grey-82 transition-shadow ease-in-out duration-150",
            className,
            {
                "aspect-w-11 aspect-h-14": isFeatured,
                "aspect-w-9 aspect-h-11": !isFeatured && size !== "square",
                "aspect-w-1 aspect-h-1": size === "square",
                "w-[62px]": size === "cart",
                "w-[100px]": size === "xsmall",
                "w-[180px]": size === "small",
                "w-[290px]": size === "medium",
                "w-[440px]": size === "large",
                "w-full": size === "full"
            }
        )} >
            <ImageOrPlaceholder image={initialImage} size={size} />
        </div>
    )
}

// `relative w-full overflow-hidden p-4 shadow-md shadow-grey-84 rounded-large transition-shadow ease-in-out duration-150  ${size === "cart" ? "w-[62px]" : size === "xsmall" ? "w-[100px]" : size === "small" ? "w-[180px]" : size === "medium" ? "w-[290px]" : size === "large" ? "w-[440px]" : "w-full"} ${className ? className : ''}`

function ImageOrPlaceholder({ image, size, }: Pick<ThumbnailProps, "size"> & { image?: string }) {
    return image ? (
        <Image
            src={image}
            alt="Thumbnail"
            className="w-full h-full absolute inset-0 p-1 object-contain object-center"
            draggable={false}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
        // sizes="100vw"
        />
    ) : (
        <div className="w-full h-full absolute inset-0 bg-grey-18 flex items-center justify-center">
            <PlaceholderImage size={size === "small" ? 16 : 24} />
        </div>
    )
}
