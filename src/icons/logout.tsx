import { IconProps } from "types/icon"

const LogoutIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" width={width} {...props} >
            <path d="M15 16.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3.063M11 12h10m0 0-2.5-2.5M21 12l-2.5 2.5" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default LogoutIcon;