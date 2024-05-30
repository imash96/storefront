"use client"

import { useState, useRef } from "react"
import useToggleState from "@libs/hooks/use-toggle-state";
import ChevronDown from "@icons/chevron-down";
import ChevronUpIcon from "@icons/chevron-up";
import CheckIcon from "@icons/check";

import "@styles/select-custom.css"


type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    defaultValue?: string
    disabled?: boolean
    placeholder: string
    checkbox?: boolean
}

type StateProp = {
    option: OptionProp,
    focusedValue: number,
    typed: string
}

export default function CustomSelect({ options, defaultValue, placeholder, disabled = false, checkbox = false }: CustomSelectProp) {
    const initialValue = defaultValue ? { label: defaultValue, value: defaultValue } : { label: placeholder || 'Select...', value: '' }
    const [state, setState] = useState<StateProp>({
        option: initialValue,
        focusedValue: -1,
        typed: ''
    })
    const { state: isOpen, open, close, toggle } = useToggleState()
    const timeout = useRef<number | NodeJS.Timeout | undefined>()


    const onBlur = () => {
        setState(preValue => {
            const value = preValue.option.value
            let focusedValue = -1
            if (value) focusedValue = options.findIndex(option => option.value === value)
            return {
                ...preValue,
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
            default:
                if (/^[a-z0-9]$/i.test(e.key)) {
                    const char = e.key
                    clearTimeout(timeout.current)
                    timeout.current = setTimeout(() => {
                        setState(prevState => {
                            return {
                                ...prevState,
                                typed: ''
                            }
                        })
                    }, 1000)

                    setState(prevState => {
                        const typed = prevState.typed + char
                        const re = new RegExp(`^${typed}`, 'i')
                        const index = options.findIndex(option => re.test(option.value))

                        if (index === -1) {
                            return {
                                ...prevState,
                                typed
                            }
                        }
                        return {
                            option: options[index],
                            focusedValue: index,
                            typed
                        }
                    })
                }
                break
        }
    }

    const onClick = () => toggle()

    const onClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, option: OptionProp) => {
        setState(prevState => {
            return {
                ...prevState,
                option
            }
        });
        if (!checkbox) close()
    }

    const renderValue = () => {
        const value = state.option.value
        return (
            (value === "" || !value) ?
                <div className="placeholder">
                    {placeholder}
                </div> :
                <div className="value">
                    {value}
                </div>
        )
    }

    return (
        <div className="select" tabIndex={0} onBlur={onBlur} onKeyDown={onKeyDown}        >
            <div className="selection" onClick={onClick}>
                {renderValue()}
                <span className="arrow">
                    {isOpen ? <ChevronUpIcon /> : <ChevronDown />}
                </span>
            </div>
            {isOpen ? <div className="options">
                <div className='disable option'>
                    {placeholder}
                </div>
                {options.map(({ value, label }, index) => {
                    return (
                        <div key={index} onClick={(e) => onClickOption(e, { value, label })} className={`option ${value === state.option.value ? 'selected' : 'hover:bg-gray-200'}`}>
                            {checkbox ?
                                <span className="checkbox">
                                    {value === state.option.value ? <CheckIcon /> : null}
                                </span> :
                                null
                            }
                            {label}
                        </div>
                    )
                })}
            </div> : null}
        </div>
    )
}