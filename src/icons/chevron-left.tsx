import { IconProps } from "types/icon"

const ChevronLeftIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={width} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
};

export default ChevronLeftIcon;