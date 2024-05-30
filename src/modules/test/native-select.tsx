import { forwardRef, useImperativeHandle, useRef, useState } from "react"

import "styles/select-native.css"
import ErrorMessage from "../common/error-message"

export type NativeSelectProps = {
    placeholder?: string
    errors?: Record<string, unknown>
    touched?: Record<string, unknown>
    options?: { value: string; label: string; }[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

export default forwardRef<HTMLSelectElement, NativeSelectProps>(
    function NativeSelect({ placeholder = "Select...", errors, touched, className, children, ...props }, ref) {
        const innerRef = useRef<HTMLSelectElement>(null)
        const [isPlaceholder, setIsPlaceholder] = useState(false)

        useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(ref, () => innerRef.current)
        const handleClick = () => {
            if (innerRef.current && innerRef.current.value === "") setIsPlaceholder(true)
            else setIsPlaceholder(false)
        }
        return (
            <div onFocus={() => innerRef.current?.focus()} onBlur={() => innerRef.current?.blur()} className={`relative flex custom-select rounded border border-grey-20 focus-within:ring-1 focus-within:border-grey-18 focus-within:ring-blue-1 ${isPlaceholder ? "text-grey-83" : "text-grey-81"} ${className}`} onClick={handleClick}>
                <select ref={innerRef} {...props} className="rounded w-full h-12 bg-bg-input px-4 py-2 border-grey-20 transition-colors duration-150 focus:border-grey-16 outline-none">
                    <option value="">{placeholder}</option>
                    {children}
                </select>
            </div>
        )
    }
)