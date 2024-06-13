"use client"

import { useEffect, useRef, useState } from "react";
import ChevronDown from "@/icons/chevron-down";
import useToggleState from "@/libs/hooks/use-toggle-state";
import Input from "./input";

import "@/styles/select-custom.css"

type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    name: string
    placeholder: string
    defaultValue?: OptionProp
    disabled?: boolean
    isSearchable?: boolean
    required?: boolean
    errors?: Record<string, unknown>
    onChange: (value: string) => void
}

export default function CustomSelect({ options, placeholder, defaultValue, disabled, name, isSearchable, onChange, ...props }: CustomSelectProp) {
    const initialValue = defaultValue ? defaultValue : { label: placeholder || 'Select', value: '' }
    const [selected, setSelected] = useState<OptionProp>(initialValue)
    const [searchValue, setSearchValue] = useState("");
    const [focusedValue, setFocusedValue] = useState<number>(-1)
    const selectRef = useRef<HTMLDivElement>(null);
    const { state, open, close, toggle } = useToggleState()

    const onClickOption = (option: OptionProp) => {
        if (option.value == selected.value) {
            close()
            return
        }
        setSelected(option)
        onChange(option.value)
        close()
    }

    const handleClick = () => {
        if (disabled) return
        toggle();
        setFocusedValue(-1)
        setSearchValue("")
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        switch (e.key) {
            case 'Enter':
                if (focusedValue >= 0) setSelected(options[focusedValue]);
                close()
                break
            case ' ':
                if (disabled) break
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

    const handleClickOutside = (event: MouseEvent) => {
        (selectRef.current && !selectRef.current.contains(event.target as Node)) && close();
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", close);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", close);
        };
    });

    return (
        <div ref={selectRef} className={`select flex flex-col select-none w-full relative text-base font-normal leading-5 text-grey-81 ${state ? 'is-open' : ''}`} onKeyDown={handleKeyDown}>
            <input type="text" className="hidden" name={name} required value={selected.value} />
            <span onClick={handleClick}
                className={`select-current w-full flex-wrap inline-flex content-center px-4 justify-between h-11 border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-sm ${disabled ? "border-grey-18 bg-grey-18 text-grey-85" : props.errors ? "text-red-1 border-red-2 focus:border-red-3 focus:shadow-red-4/20 focus:ring-red-4/50 hover:bg-red-3/40 bg-red-3/20" : "border-grey-14 focus:border-blue-3 focus:shadow-blue-4/20 focus:ring-blue-4/50 hover:bg-grey-20 bg-grey-22"}`}
            >
                {selected.label}
                {!disabled && <ChevronDown />}
            </span>
            {!disabled && (state && options.length) &&
                <ul tabIndex={0} className="select-options z-10 absolute top-12 block w-full overflow-y-auto max-h-72 text-sm font-medium leading-9 bg-off text-on border rounded-md appearance-none border-grey-14">
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