import CheckIcon from "@icons/check";
import ChevronDown from "@icons/chevron-down";
import ChevronUpIcon from "@icons/chevron-up";
import useToggleState from "@libs/hooks/use-toggle-state";
import { forwardRef, useRef, useState, useImperativeHandle } from "react";

type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    placeholder: string
    defaultValue?: string
    disabled?: boolean
    checkbox?: boolean
} & React.HTMLAttributes<HTMLDivElement>

type StateProp = {
    option: OptionProp,
    focusedValue: number,
    typed: string
}

export default forwardRef<OptionProp | undefined, CustomSelectProp>(
    function CustmSelect({ options, placeholder, defaultValue, disabled = false, checkbox = false, ...props }, ref) {
        const initialValue = defaultValue ? { label: defaultValue, value: defaultValue } : { label: placeholder || 'Select...', value: '' }
        const [state, setState] = useState<StateProp>({
            option: initialValue,
            focusedValue: -1,
            typed: ''
        })
        const { state: isOpen, open, close, toggle } = useToggleState()
        const timeout = useRef<number | NodeJS.Timeout | undefined>()
        useImperativeHandle<OptionProp | undefined, undefined | OptionProp>(ref, () => state.option)
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
            <div className="relative flex custom-select rounded border border-grey-18 focus-within:ring-1 focus-within:border-grey-20 focus-within:ring-grey-17 text-grey-81" tabIndex={0} onBlur={onBlur} onKeyDown={onKeyDown}>
                <div className="rounded w-full h-12 bg-bgBase px-4 py-2 border-grey-18 transition-colors duration-150 focus:border-grey-16 outline-none" onClick={onClick}>
                    {renderValue()}
                    <span className="arrow">
                        {isOpen ? <ChevronUpIcon /> : <ChevronDown />}
                    </span>
                </div>
                {isOpen ? <div className="options mt-1 rounded w-full bg-bgBase border-grey-18 transition-colors duration-150 focus:border-grey-16 outline-none">
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
)