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

type PlaceholderProps = {
    image?: string
} & Pick<ThumbnailProps, "size">

export default function Thumbnail({ thumbnail, images, size = "small", isFeatured, className }: ThumbnailProps) {
    const initialImage = thumbnail || images?.[0]?.url

    return (
        <div className={clsx(
            "relative h-full bg-grey-18 shadow-grey-84 group-hover:shadow-grey-82 transition-shadow ease-in-out duration-150",
            className,
            {
                "w-14": size === "cart",
            }
        )}>
            <ImageOrPlaceholder image={initialImage} size={size} />
        </div>
    )
}

function ImageOrPlaceholder({ image, size, }: PlaceholderProps) {
    return image ? (
        <Image
            src={image}
            alt="Thumbnail"
            className="w-full h-full absolute inset-0 p-0.5 object-contain object-center"
            draggable={false}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
        // sizes="100vw"
        />
    ) : (
        <PlaceholderImage size={size === "small" ? 16 : 24} />
    )
}