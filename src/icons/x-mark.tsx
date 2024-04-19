import { IconProps } from "types/icon"

const XMarkIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={width} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default XMarkIcon;