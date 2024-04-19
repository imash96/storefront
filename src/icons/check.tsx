import { IconProps } from "types/icon"

export default function CheckIcon({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="0 0 16 16" width={width} {...props}>
            <path fill={color} d="m13 1.156-1.406 1.438L6 8.188 4.406 6.594 3 5.156.156 8l1.438 1.406 3 3L6 13.844l1.406-1.438 7-7L15.844 4 13 1.156z" />
        </svg>
    )
}