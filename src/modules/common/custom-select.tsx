"use client"

import CheckIcon from "@icons/check";
import ChevronDown from "@icons/chevron-down";
import useToggleState from "@libs/hooks/use-toggle-state";
import { useState } from "react";

import "@styles/new-custom-select.css"

type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    placeholder: string
    defaultValue?: OptionProp
    disabled?: boolean
    checkbox?: boolean
    required?: boolean
    errors?: Record<string, unknown>
}

export default function CustomSelect({ options, placeholder, defaultValue, disabled, checkbox, ...props }: CustomSelectProp) {
    const initialValue = defaultValue ? defaultValue : { label: placeholder || 'Select', value: '' }
    const [selected, setSelected] = useState<OptionProp>(initialValue)
    const [focusedValue, setFocusedValue] = useState<number>(-1)
    const { state, open, close, toggle } = useToggleState()

    const handleClick = (option: OptionProp) => {
        setSelected(option)
        close()
    }
    console.log(selected, initialValue, defaultValue)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        switch (e.key) {
            case 'Enter':
                if (focusedValue >= 0) setSelected(options[focusedValue]);
                close()
                break
            case ' ':
                toggle()
                break
            case 'Escape':
            case 'Tab':
                if (state) close()
                break
            case 'ArrowDown':
                if (focusedValue < options.length - 1 && state) setFocusedValue(focusedValue + 1)
                break
            case 'ArrowUp':
                if (focusedValue > 0 && state) setFocusedValue(focusedValue - 1)
                break
        }
    }

    return (
        <div className={`select flex flex-col select-none w-full relative z-0 text-sm font-normal leading-5 text-grey-81 ${state ? 'is-open' : ''}`} tabIndex={0} onKeyDown={handleKeyDown}>
            <span onClick={() => { toggle(), setFocusedValue(-1) }}
                className={`select-current w-full flex-wrap inline-flex content-center px-4 justify-between h-11 bg-grey-22 border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-sm hover:bg-grey-20 ${disabled ? "border-grey-18" : props.errors ? "text-red-1 border-red-2 focus:border-red-3 focus:shadow-red-4/20 focus:ring-red-4/50" : "border-grey-14 focus:border-blue-3 focus:shadow-blue-4/20 focus:ring-blue-4/50"}`}
            >
                {selected.label}
                <ChevronDown />
            </span>
            {(state && options.length) &&
                <ul className="select-options mt-0.5 block w-full overflow-y-auto max-h-72 text-sm font-medium leading-9 bg-white border rounded-md appearance-none border-grey-14">
                    {options.map((option, index) =>
                        <li key={index} value={option.value} data-value={option.value} onClick={() => handleClick(option)}
                            className={`cursor-pointer px-4 ${option.value === selected.value ? "selected" : ''}`}
                        >
                            {option.label}
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

const Check = () => (
    <svg viewBox="0 0 16 16">
        <path d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z" transform="translate(0 1)" />
    </svg>
)