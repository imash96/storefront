import { IconProps } from "types/icon"

export default function CreditCard({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width={width} {...props}>
            <path fill={color} d="M4.125 20.447h15.75c2.099 0 3.154 -1.034 3.154 -3.103V6.666c0 -2.069 -1.055 -3.114 -3.154 -3.114H4.125c-2.099 0 -3.154 1.045 -3.154 3.114v10.677c0 2.069 1.055 3.104 3.154 3.104M2.588 6.757c0 -1.045 0.563 -1.587 1.567 -1.587h15.7c0.994 0 1.557 0.542 1.557 1.587v0.843H2.588Zm1.567 12.074c-1.005 0 -1.567 -0.533 -1.567 -1.577V9.881h18.824v7.373c0 1.044 -0.563 1.577 -1.557 1.577ZM5.31 15.857h2.461c0.593 0 0.984 -0.392 0.984 -0.964v-1.858c0 -0.562 -0.392 -0.964 -0.984 -0.964H5.31c-0.593 0 -0.984 0.402 -0.984 0.964v1.858c0 0.573 0.392 0.964 0.984 0.964" />
        </svg>
    )
}