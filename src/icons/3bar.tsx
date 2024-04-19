import { IconProps } from "types/icon"

const Bars3Icon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
  return (
    <svg viewBox="0 0 28 28" {...props}>
      <path d="M4 7a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 6a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2H5Z" fill={color} />
    </svg>
  );
};

export default Bars3Icon