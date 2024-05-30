import Eye from "@icons/eye"
import EyeOff from "@icons/eye-off"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"

type InputProps = Omit<
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    "placeholder"
> & {
    label: string
    errors?: Record<string, unknown>
    touched?: Record<string, unknown>
    name: string
    topLabel?: string
}

export default forwardRef<HTMLInputElement, InputProps>(
    function Input({ type, name, label, touched, required, topLabel, ...props }, ref) {
        const inputRef = useRef<HTMLInputElement>(null)
        const [showPassword, setShowPassword] = useState(false)
        const [inputType, setInputType] = useState(type)

        useEffect(() => {
            (type === "password" && showPassword) && setInputType("text");

            (type === "password" && !showPassword) && setInputType("password")

        }, [type, showPassword])

        useImperativeHandle(ref, () => inputRef.current!)

        return (
            <div className="flex flex-col w-full">
                {topLabel && (
                    <span className="mb-2 text-sm font-medium leading-5">{topLabel}</span>
                )}
                <div className="flex relative z-0 w-full text-sm font-normal leading-5">
                    <input
                        type={inputType}
                        name={name}
                        placeholder=" "
                        required={required}
                        className={`pt-4 pb-1 block w-full h-11 px-4 mt-0 bg-grey-22 border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-sm hover:bg-grey-20 ${props.disabled ? "text-grey-81 border-grey-18" : props.errors ? "text-red-1 border-red-2 focus:border-red-3 focus:shadow-red-4/20 focus:ring-red-4/50" : "text-grey-81 border-grey-14 focus:border-blue-3 focus:shadow-blue-4/20 focus:ring-blue-4/50"}`}
                        {...props}
                        ref={inputRef}
                    />
                    <label htmlFor={name} onClick={() => inputRef.current?.focus()} className="flex items-center justify-center mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-grey-83">
                        {label}
                        {required && <span className="text-red-1">*</span>}
                    </label>
                    {type === "password" && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-grey-83 px-4 focus:outline-none transition-all duration-150 outline-none focus:text-grey-81 absolute right-0 top-3"
                        >
                            {showPassword ? <Eye /> : <EyeOff />}
                        </button>
                    )}
                </div>
            </div>
        )
    }
)