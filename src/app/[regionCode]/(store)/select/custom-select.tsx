"use client"

import useToggleState from "@libs/hooks/use-toggle-state"
import { useState } from "react"

import "styles/custom-select.css"

type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    defaultValue?: string
    disabled?: boolean
    placeholder: string
}

export default function CustomSelect({ options, placeholder, defaultValue, disabled = false }: CustomSelectProp) {
    // temp baseClassname
    const baseClassName = 'select'
    const initialValue = defaultValue ? { label: defaultValue, value: defaultValue } : { label: placeholder || 'Select...', value: '' }
    const [selected, setSelected] = useState<OptionProp>(initialValue)
    const { state, open, close, toggle } = useToggleState()

    const handleMouseDown = (event: React.MouseEvent) => {
        if (event.type === 'mousedown' && event.button !== 0) return
        handleClickEvent(event)
    }

    const handleClickEvent = (event: React.MouseEvent | React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()

        if (!disabled) toggle()
    }

    const setValue = (value: string, label: string) => {
        let newState = {
            value,
            label
        }
        close()
        setSelected(newState)
    }

    return (
        <div className={`${baseClassName} ${state ? 'is-open' : ''}`}>
            <div className={`${baseClassName}-current ${disabled ? `${baseClassName}-disabled` : ''}`}
                onMouseDown={handleMouseDown} onTouchEnd={handleClickEvent}>
                <div className={`${baseClassName}-option`}>{selected.label}</div>
            </div>
            {state ? options.length ? <div className={`${baseClassName}-select`}>
                <ul>
                    <li className="disabled">{placeholder}</li>
                    {options.map((option, index) =>
                        <li key={index} className={`${baseClassName}-option ${selected.value === option.value ? 'selected' : ''}`}
                            onClick={() => setValue(option.value, option.label)}
                        >{option.label}</li>
                    )}
                </ul>
            </div> : <div className={`${baseClassName}-noresults`}>No options found</div> : null
            }
        </div>
    )
}