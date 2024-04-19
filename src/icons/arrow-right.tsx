import { IconProps } from "types/icon"

export default function ArrowRight({ width = 16, color = "currentColor", ...props }: IconProps) {
    return (
        <svg width={width} viewBox="0 0 20 20" {...props}>
            <path fill={color} d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414" />
        </svg>
    )
}


{/* <svg width={width} viewBox="0 0 100 106" {...props}>
    <path d="M32.802 14.182c0 6.671 18.078 19.933 22.007 25.801L8.48 39.942C-1.91 40.409.173 49.808.173 59.713c0 2.347 3.434 6.422 8.344 6.833l46.292-.003c-2.226 3.324-8.343 8.722-11.572 11.952-3.011 3.011-10.435 8.878-10.435 13.849 0 3.776 6.992 13.66 15.177 13.66 4.234 0 11.799-9.144 16.125-13.469l29.974-29.974c5.653-5.632 9.801-9.728.766-18.599L57.274 6.405C50.438-.471 46.49-3.011 38.677 4.883c-2.214 2.238-5.877 5.251-5.877 9.3z" fill={color} /> 
</svg> */}