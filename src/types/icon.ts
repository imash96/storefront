import { CSSProperties } from "react"

export type IconProps = {
    color?: CSSProperties | undefined
    col?: CSSProperties | undefined
    style?: CSSProperties | undefined
    size?: string | number
    width?: string | number
    props?: Object
} & React.SVGAttributes<SVGElement> & React.SVGProps<SVGSVGElement>
