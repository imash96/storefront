import { IconProps } from "types/icon"

const MagnifyingGlassIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
  return (
    <svg viewBox="-1 -1 20 20" width={width} {...props}>
      <path fill={color} d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094 3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
      />
    </svg>
  );
};

export default MagnifyingGlassIcon;