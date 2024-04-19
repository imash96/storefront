import { IconProps } from "types/icon"

const UserIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => {
  return (
    <svg viewBox="0 0 24 24" width={width} {...props}>
      <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" fill={color}/>
    </svg>
  );
};

export default UserIcon;