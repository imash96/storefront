"use client"

import ChevronDown from "@icons/chevron-down";
import useToggleState from "@libs/hooks/use-toggle-state";
import { useState } from "react";

import "@styles/select-custom.css"
import Input from "./input";

type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    placeholder: string
    defaultValue?: OptionProp
    disabled?: boolean
    isSearchable?: boolean
    required?: boolean
    errors?: Record<string, unknown>
    onChange: (value: string) => void
}

export default function CustomSelect({ options, placeholder, defaultValue, disabled, isSearchable, onChange, ...props }: CustomSelectProp) {
    const initialValue = defaultValue ? defaultValue : { label: placeholder || 'Select', value: '' }
    const [selected, setSelected] = useState<OptionProp>(initialValue)
    const [searchValue, setSearchValue] = useState("");
    const [focusedValue, setFocusedValue] = useState<number>(-1)
    const { state, open, close, toggle } = useToggleState()

    const onClickOption = (option: OptionProp) => {
        setSelected(option)
        onChange(option.value)
        close()
    }

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

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) return options;

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    return (
        <div className={`select flex flex-col select-none w-full relative z-0 text-sm font-normal leading-5 text-grey-81 ${state ? 'is-open' : ''}`} tabIndex={0} onKeyDown={handleKeyDown}>
            <span onClick={() => { toggle(), setFocusedValue(-1), setSearchValue("") }}
                className={`select-current w-full flex-wrap inline-flex content-center px-4 justify-between h-11 bg-grey-22 border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-sm hover:bg-grey-20 ${disabled ? "border-grey-18" : props.errors ? "text-red-1 border-red-2 focus:border-red-3 focus:shadow-red-4/20 focus:ring-red-4/50" : "border-grey-14 focus:border-blue-3 focus:shadow-blue-4/20 focus:ring-blue-4/50"}`}
            >
                {selected.label}
                <ChevronDown />
            </span>
            {(state && options.length) &&
                <ul className="select-options mt-0.5 block w-full overflow-y-auto max-h-72 text-sm font-medium leading-9 bg-off text-on border rounded-md appearance-none border-grey-14">
                    {isSearchable &&
                        <div className="search-box p-2 sticky top-0 bg-off">
                            <Input label="Search" name="select-search" onChange={onSearch} value={searchValue} />
                        </div>
                    }
                    {getOptions().map((option, index) =>
                        <li key={index} value={option.value} data-value={option.value} onClick={() => onClickOption(option)}
                            className={`cursor-pointer px-4 flex gap-4 ${option.value === selected.value ? "selected" : ''}`}
                        >
                            {option.label}
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}