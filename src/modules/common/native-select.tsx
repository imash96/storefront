import clsx from '@libs/utils/clsx';
import { forwardRef, useRef, useImperativeHandle } from 'react';

export type NativeSelectProps = {
    placeholder?: string
    errors?: Record<string, unknown>
    touched?: Record<string, unknown>
    options?: { value: string; label: string; }[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

type imperativeProp = {
    focus: () => void
}

export default forwardRef<HTMLSelectElement, NativeSelectProps>(
    function NativeSelect({ placeholder = "Select...", errors, touched, className, children, ...props }, ref) {
        const innerRef = useRef<HTMLSelectElement>(null)

        useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(ref, () => innerRef.current);

        return (
            <div onFocus={() => innerRef.current?.focus()} onBlur={() => innerRef.current?.blur()} className="relative flex items-center text-base border border-grey-20 text-grey-81">
                <select ref={innerRef} {...props} >
                    <option value="">{placeholder}</option>
                    {children}
                </select>
            </div>
        );
    }
);