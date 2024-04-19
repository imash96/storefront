import { IconProps } from "types/icon"

const CancelIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 32 32"  {...props} >
            <circle fill="none" stroke={color} strokeWidth={2} strokeMiterlimit={10} cx={16} cy={16} r={12} />
            <path fill="none" stroke={color} strokeWidth={2} strokeMiterlimit={10} d="m11.5 11.5 9 9m0-9-9 9" />
        </svg>
    );
};

export default CancelIcon;