import ChevronDown from "@icons/chevron-down";
import ChevronUpIcon from "@icons/chevron-up";
import useToggleState from "@libs/hooks/use-toggle-state";
import { useEffect, useRef, useState } from "react";

import "@styles/select.css"

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

type StateProp = {
    option: OptionProp,
    focusedValue: number,
    isFocused?: boolean,
    typed: string
}

export default function OldSelect({ placeHolder, options, defaultValue, isSearchable, checkbox, onChange, ...prop }: CustomSelectProp) {
    const timeout = useRef<number | NodeJS.Timeout | undefined>()
    const { state: showMenu, open, close, toggle } = useToggleState()
    const initialValue = defaultValue ? defaultValue : { label: placeHolder || 'Select', value: '' }
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef<HTMLDivElement | null>(null);
    const [state, setState] = useState<StateProp>({
        option: initialValue,
        focusedValue: -1,
        isFocused: false,
        typed: ''
    })

    const handler = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
            close()
        }
    };

    useEffect(() => {
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const onBlur = () => {
        setState(preValue => {
            const value = preValue.option.value
            let focusedValue = -1
            if (value) focusedValue = options.findIndex(option => option.value === value)
            return {
                ...preValue,
                isFocused: false,
                focusedValue,
            }
        })
        close()
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
                toggle()
                break
            case 'ArrowDown':
                e.preventDefault()
                setState(prevState => {
                    let { focusedValue } = prevState
                    if (focusedValue < options.length - 1) {
                        focusedValue++
                        return {
                            ...prevState,
                            option: options[focusedValue],
                            focusedValue
                        }
                    } else {
                        return prevState
                    }
                })
                break
            case 'ArrowUp':
                e.preventDefault()
                setState(prevState => {
                    let { focusedValue } = prevState
                    if (focusedValue > 0) {
                        focusedValue--
                        return {
                            ...prevState,
                            option: options[focusedValue],
                            focusedValue
                        }
                    } else {
                        return prevState
                    }
                })
                break
        }
    }

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onFocus = () => setState(preValue => {
        return {
            ...preValue,
            isFocused: true
        }
    })

    const onClickOption = (option: OptionProp) => {
        setState(prevState => {
            return {
                ...prevState,
                option
            }
        });
        if (!checkbox) close()
        onChange(option);
    }

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    const getDisplay = () => {
        const label = state.option.label
        return (
            (label === "" || !label) ? placeHolder : label
        )
    }

    const isSelected = (option: OptionProp) => {
        if (!state.option) {
            return false;
        }

        return state.option.value === option.value;
    };

    return (
        <div className="custom--dropdown-container">

            <div ref={inputRef} onClick={toggle} className="dropdown-input" onKeyDown={onKeyDown} onFocus={onFocus}>
                <div className={`dropdown-selected-value ${!state.option ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon isOpen={showMenu} />
                    </div>
                </div>
            </div>

            {
                showMenu && (
                    <div className={`dropdown-menu alignment--${prop.align || 'auto'}`}>
                        {
                            isSearchable && (
                                <div className="search-box">
                                    <input className="form-control" onChange={onSearch} value={searchValue} />
                                </div>
                            )
                        }
                        {
                            getOptions().map((option, index) => (
                                <div onClick={() => onClickOption(option)} tabIndex={index} key={option.value} className={`dropdown-item ${isSelected(option) && "selected"}`} >
                                    {option.label}
                                </div>
                            ))
                        }
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