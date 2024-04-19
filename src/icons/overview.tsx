import { IconProps } from "types/icon"

const OverviewIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
    return (
        <svg viewBox="0 0 72 72" fill="none" width={width} {...props} >
            <path d="M59 25H25a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm0 15H25a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm0 15H25a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM18 25h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm0 15h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm0 15h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
        </svg>
    )
}

export default OverviewIcon;