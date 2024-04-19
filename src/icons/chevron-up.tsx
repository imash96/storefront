import { IconProps } from "types/icon"

export default function ChevronUpIcon({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="0 0 20 20" width={width} {...props}>
            <path fill={color} d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13z" />
        </svg>
    )
}