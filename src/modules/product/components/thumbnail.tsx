import { Image as MedusaImage } from "@medusajs/medusa"
import PlaceholderImage from "@icons/placeholder-image"
import Image from "next/image"

type ThumbnailProps = {
    thumbnail?: string | null
    images?: MedusaImage[] | null
    size?: "cart" | "xsmall" | "small" | "medium" | "large" | "full"
    className?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail, images, size = "small", className }) => {
    const initialImage = thumbnail || images?.[0]?.url

    return (
        <div
            className={`relative aspect-[29/34] ${size === "cart" ? "w-[62px]" : size === "xsmall" ? "w-[100px]" : size === "small" ? "w-[180px]" : size === "medium" ? "w-[290px]" : size === "large" ? "w-[440px]" : "w-full"} ${className ? className : ''}`} >
            <ImageOrPlaceholder image={initialImage} size={size} />
        </div>
    )
}

const ImageOrPlaceholder = ({ image, size, }: Pick<ThumbnailProps, "size"> & { image?: string }) => {
    return image ? (
        <Image
            src={image}
            alt="Thumbnail"
            className="absolute inset-0 p-1 object-contain object-center"
            draggable={false}
            fill
            sizes="100vw"
        />
    ) : (
        <div className="w-full h-full absolute inset-0 bg-gray-100 flex items-center justify-center">
            <PlaceholderImage size={size === "small" ? 16 : 24} />
        </div>
    )
}

export default Thumbnail
