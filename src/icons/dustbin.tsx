import { IconProps } from "types/icon"

const DustbinIcon: React.FC<IconProps> = ({ width = 16, color = "currentColor", ...props }) => (
  <svg width={width} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M3.333 5.49h13.333m-9.523.01V4c0-.398.15-.78.418-1.06.268-.282.632-.44 1.01-.44h2.858c.378 0 .742.158 1.01.44.268.28.418.662.418 1.06v1.5M15 5.5V16c0 .398-.15.78-.418 1.06-.268.282-.632.44-1.01.44H6.428a1.39 1.39 0 0 1-1.01-.44A1.539 1.539 0 0 1 5 16V5.5h10ZM8.332 9.237v4.167m3.334-4.167v4.167" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default DustbinIcon;