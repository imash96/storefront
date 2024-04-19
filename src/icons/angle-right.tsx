import { IconProps } from "types/icon"

const AngleRight: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}

export default AngleRight;