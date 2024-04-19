import { IconProps } from "types/icon"

const ChevronRightIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={width} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
};

export default ChevronRightIcon;