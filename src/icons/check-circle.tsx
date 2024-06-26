import { IconProps } from "types/icon"

const CheckCircleIcon: React.FC<IconProps> = ({ width = 20, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 20 20" fill="currentColor" {...props} >
            <path fillRule="evenodd" d="M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4L9 11.6 6.7 9.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z" fill={color} />
        </svg>
    )
}

export default CheckCircleIcon;