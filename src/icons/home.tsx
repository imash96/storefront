import { IconProps } from "types/icon"

const HomeIcon: React.FC<IconProps> = ({ width = 20, color = "currentColor", ...props }) => {
    return (
        <svg width={width} viewBox="0 0 0.75 0.75" fill="none" {...props} >
            <path d="M.34.068a.03.03 0 0 1 .04 0l.27.24a.03.03 0 0 1-.04.045L.6.343V.57a.06.06 0 0 1-.06.06H.18A.06.06 0 0 1 .12.57V.344L.11.353A.03.03 0 0 1 .07.308l.27-.24zM.18.29v.28h.09V.42A.03.03 0 0 1 .3.39h.12a.03.03 0 0 1 .03.03v.15h.09V.29L.36.13.18.29zm.21.28V.45H.33v.12h.06z" fill={color} />
        </svg>
    )
}

export default HomeIcon;