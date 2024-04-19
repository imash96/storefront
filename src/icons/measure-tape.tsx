import { IconProps } from "types/icon"

const MeasureTape: React.FC<IconProps> = ({ width = 20, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 20 20" fill={color} {...props} >
            <path d="M12.832 2.246 2.246 12.831l4.922 4.922L17.754 7.169Zm0 1.777 3.145 3.144-8.809 8.809-3.144-3.145.722-.722 1.348 1.348.899-.879-1.368-1.367.742-.722.546.547.879-.898-.547-.527.742-.742 1.348 1.348.879-.879L8.866 7.99l.742-.742.527.547.898-.879-.547-.547.725-.744 1.367 1.368.879-.899-1.348-1.348Z" />
        </svg>
    )
}

export default MeasureTape;