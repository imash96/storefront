import { IconProps } from "types/icon"

export default function ChevronDown({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="-1 0 19 19" width={width} {...props}>
            <path fill={color} d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z" />
        </svg>
    )
}