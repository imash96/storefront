"use client"

import useToggleState from "@libs/hooks/use-toggle-state";
import { useState } from "react";

type OptionProp = {
    label: string;
    value: string;
}

type CustomSelectProp = {
    placeHolder: string,
    options: OptionProp[],
    defaultValue?: OptionProp
    disabled?: boolean
    checkbox?: boolean
    isSearchable?: boolean,
    onChange: (newValue: OptionProp) => void,
    align?: string,
}

export default function NewSelect({ placeHolder, options, defaultValue, isSearchable, checkbox, onChange, ...prop }: CustomSelectProp) {
    const initialValue = defaultValue ? defaultValue : { label: placeHolder || 'Select', value: '' }
    const { state, open, close, toggle } = useToggleState()
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [selectedValue, setSelectedValue] = useState<OptionProp | null>(initialValue)
    const [focusedValue, setFocusedValue] = useState<number>(-1)

    const onBlur = () => {
        console.log("Blur")
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        switch (e.key) {
            case ' ':
                e.preventDefault()
                toggle()
                break
            case 'Escape':
            case 'Tab':
                e.preventDefault()
                close()
                break
            case 'Enter':
                setSelectedValue(options[focusedValue])
                toggle()
                break
            case 'ArrowDown':
                e.preventDefault()
                if (focusedValue < options.length - 1) {
                    state && setFocusedValue(focusedValue + 1)
                }
                break
            case 'ArrowUp':
                e.preventDefault()
                if (focusedValue > 0) {
                    state && setFocusedValue(focusedValue - 1)
                }
                break
        }
    }

    const onHoverOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { value } = e.currentTarget.dataset
        const index = options.findIndex(option => option.value === value)
        console.log(index)
        setFocusedValue(index)
    }

    // Below are basic logic of CustomSelect

    const getDisplay = () => {
        const label = selectedValue?.label
        return (
            (label === "" || !label) ? placeHolder : label
        )
    }

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    const onClickOption = (option: OptionProp) => {
        setSelectedValue(option)
        if (!checkbox) close()
        onChange(option);
    }

    const isSelected = (option: OptionProp) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    return (
        <div className="custom--dropdown-container">

            <div className="relative flex custom-select rounded border border-grey-18 focus-within:ring-1 focus-within:border-grey-20 focus-within:ring-grey-17 text-grey-81" tabIndex={0} onKeyDown={onKeyDown} onClick={toggle} onBlur={onBlur}>
                <div className="rounded w-full h-12 bg-bgBase px-4 py-2 border-grey-18 transition-colors duration-150 focus:border-grey-16 outline-none">{getDisplay()}</div>
                <div className="arrow">
                    <Icon isOpen={state} />
                </div>
            </div>

            {
                state && (
                    <div className="options mt-1 rounded w-full bg-bgBase border-grey-18 transition-colors duration-150 focus:border-grey-16 outline-none">
                        {getOptions().map((option, index) => {
                            return (
                                <div key={option.value} data-value={option.value} onMouseOver={onHoverOption} onClick={() => onClickOption(option)} tabIndex={index} className={`dropdown-item ${isSelected(option) && "hover:bg-gray-200"} ${index === focusedValue ? 'border' : ''}`} >
                                    {option.label}
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

const Icon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};