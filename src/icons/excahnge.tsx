import { IconProps } from "types/icon"

export default function Exchange({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width={width} fill={color} {...props}>
            <path fillRule="evenodd" d="M5 5.5A1.5 1.5 0 0 0 3.5 7v3A1.5 1.5 0 0 0 5 11.5h3A1.5 1.5 0 0 0 9.5 10V9H17v2a.5.5 0 0 0 1 0V8.5a.5.5 0 0 0-.5-.5h-8V7A1.5 1.5 0 0 0 8 5.5H5ZM8.5 7a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7ZM7 13a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 .5.5h8v1a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v1H7v-2Zm8.5 4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3Z" />
        </svg>
    )
}