import { IconProps } from "types/icon"

export default function Spinner({ width = 16, color = 'currentColor', ...props }: IconProps) {
    return (
        <svg width={width} fill='none' viewBox="0 0 14 14" className="animate-spin" {...props} >
            <circle cx={7} cy={7} r={6} stroke={color} strokeOpacity={0.25} strokeWidth={2} />
            <path fill={color} fillOpacity={0.75} d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z" />
        </svg>
    )
}