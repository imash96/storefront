import { IconProps } from "types/icon"

const UncheckCircleIcon: React.FC<IconProps> = ({ width = 20, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 24 24" fill="currentColor" {...props} >
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" clipRule="evenodd" />
        </svg>
    )
}

export default UncheckCircleIcon;