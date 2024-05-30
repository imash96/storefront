import { IconProps } from "types/icon"

export default function PencilSquare({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width={width} fill={color} {...props}>
            <path d="M12 3a1.5 1.5 0 1 1 0 3H6v12h12v-6a1.5 1.5 0 1 1 3 0v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm5.929.95 2.121 2.121L11.121 15H9v-2.121zm4.244-2.123a1.5 1.5 0 0 1 0 2.123l-1.062 1.06-2.121-2.121 1.06-1.062a1.5 1.5 0 0 1 2.121 0" />
        </svg>
    )
}