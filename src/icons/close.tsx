import { IconProps } from "types/icon"

export default function Close({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width={width} {...props}>
            <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5" />
        </svg>
    )
}