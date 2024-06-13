import clsx from '@/libs/utils/clsx';
import { forwardRef, useRef, useImperativeHandle } from 'react';

export type NativeSelectProps = {
    placeholder?: string
    errors?: Record<string, unknown>
    touched?: Record<string, unknown>
    options?: { value: string; label: string; }[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

export default forwardRef<HTMLSelectElement, NativeSelectProps>(
    function NativeSelect({ placeholder = "Select...", errors, touched, className, children, ...props }, ref) {
        const innerRef = useRef<HTMLSelectElement>(null)

        useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(ref, () => innerRef.current);

        return (
            <div onFocus={() => innerRef.current?.focus()} onBlur={() => innerRef.current?.blur()} className="flex flex-col select-none w-full relative text-base font-normal leading-5 text-grey-81">
                <select ref={innerRef} {...props}
                    className={`select-current w-full flex-wrap inline-flex content-center px-4 justify-between h-11 border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-sm ${props.disabled ? "border-grey-18 bg-grey-18 text-grey-84" : errors ? "text-red-1 border-red-2 focus:border-red-3 focus:shadow-red-4/20 focus:ring-red-4/50 hover:bg-red-3/40 bg-red-3/20" : "border-grey-14 focus:border-blue-3 focus:shadow-blue-4/20 focus:ring-blue-4/50 hover:bg-grey-20 bg-grey-22"}`}
                >
                    {children}
                </select>
            </div>
        );
    }
);