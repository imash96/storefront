import { IconProps } from "types/icon"

const MinusIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
    return (
        <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={width} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    );
};

export default MinusIcon;