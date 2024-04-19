import { IconProps } from "types/icon"

const LightModeIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 20 20" fill="none" {...props} >
            <path d="M18.127 12.502A8.125 8.125 0 0 1 7.499 1.874 8.128 8.128 0 0 0 10.624 17.5a8.127 8.127 0 0 0 7.502-4.998Z" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default LightModeIcon;