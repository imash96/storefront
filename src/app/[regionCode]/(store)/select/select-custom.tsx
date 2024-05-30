"use client"

import { useState } from "react"
import "styles/select-custom.css"
type OptionProp = {
    value: string;
    label: string;
}

type CustomSelectProp = {
    options: OptionProp[]
    defaultValue?: string
    disabled?: boolean
    placeholder: string
    multiple?: boolean
}

type StateProp = {
    values: (string | undefined)[],
    focusedValue: number,
    isFocused: boolean,
    isOpen: boolean,
    typed: string
}

const ChevronDown = () => (
    <svg viewBox="0 0 10 7">
        <path d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z" transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) " />
    </svg>
)

const ChevronUp = () => (
    <svg viewBox="0 0 10 8">
        <path d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z" transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) " />
    </svg>
)

const X = () => (
    <svg viewBox="0 0 16 16">
        <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
    </svg>
)

const Check = () => (
    <svg viewBox="0 0 16 16">
        <path d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z" transform="translate(0 1)" />
    </svg>
)

export default function SelectCustom({ options, defaultValue, placeholder, disabled = false, multiple = false, ...props }: CustomSelectProp) {
    const [state, setState] = useState<StateProp>({
        values: [defaultValue],
        focusedValue: -1,
        isFocused: false,
        isOpen: false,
        typed: ''
    })
    let timeout: number | NodeJS.Timeout | undefined

    const onFocus = () => setState(preValue => {
        return {
            ...preValue,
            isFocused: true
        }
    })

    const onBlur = () => {
        setState(preValue => {
            if (multiple) {
                return {
                    ...preValue,
                    focusedValue: -1,
                    isFocused: false,
                    isOpen: false
                }
            } else {
                const { values } = preValue
                const value = values[0]
                let focusedValue = -1
                if (value) focusedValue = options.findIndex(option => option.value === value)
                return {
                    ...preValue,
                    focusedValue,
                    isFocused: false,
                    isOpen: false
                }
            }
        })
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        const { isOpen } = state
        switch (e.key) {
            case ' ':
                if (isOpen) {
                    if (multiple) {
                        setState(preValue => {
                            const { focusedValue } = preValue
                            if (focusedValue !== -1) {
                                const [...values] = preValue.values
                                const value = options[focusedValue].value
                                const index = values.indexOf(value)

                                if (index === -1) {
                                    values.push(value)
                                } else {
                                    values.splice(index, 1)
                                }

                                return { ...preValue, values }
                            } else {
                                return preValue
                            }
                        })
                    } else {
                        setState(preValue => {
                            return {
                                ...preValue,
                                isOpen: false
                            }
                        })
                    }
                } else {
                    setState(preValue => {
                        return {
                            ...preValue,
                            isOpen: true
                        }
                    })
                }
                break
            case 'Escape':
            case 'Tab':
                if (isOpen) {
                    setState(preValue => {
                        return {
                            ...preValue,
                            isOpen: false
                        }
                    })
                }
                break
            case 'Enter':
                setState(prevState => {
                    return {
                        ...prevState,
                        isOpen: !prevState.isOpen
                    }
                })
                break
            case 'ArrowDown':
                setState(prevState => {
                    let { focusedValue } = prevState

                    if (focusedValue < options.length - 1) {
                        focusedValue++

                        if (multiple) {
                            return {
                                ...prevState,
                                focusedValue
                            }
                        } else {
                            return {
                                ...prevState,
                                values: [options[focusedValue].value],
                                focusedValue
                            }
                        }
                    } else {
                        return prevState
                    }
                })
                break
            case 'ArrowUp':
                setState(prevState => {
                    let { focusedValue } = prevState

                    if (focusedValue > 0) {
                        focusedValue--

                        if (multiple) {
                            return {
                                ...prevState,
                                focusedValue
                            }
                        } else {
                            return {
                                ...prevState,
                                values: [options[focusedValue].value],
                                focusedValue
                            }
                        }
                    } else {
                        return prevState
                    }
                })
                break
            default:
                if (/^[a-z0-9]$/i.test(e.key)) {
                    const char = e.key
                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
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

                        if (multiple) {
                            return {
                                ...prevState,
                                focusedValue: index,
                                typed
                            }
                        } else {
                            return {
                                ...prevState,
                                values: [options[index].value],
                                focusedValue: index,
                                typed
                            }
                        }
                    })
                }
                break
        }
    }

    const onClick = () => {
        setState(prevState => {
            return {
                ...prevState,
                isOpen: !prevState.isOpen
            }
        })
    }

    const onDeleteOption = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget.dataset

        setState(prevState => {
            const [...values] = prevState.values
            const index = values.indexOf(value as string)
            values.splice(index, 1)

            return { ...prevState, values }
        })
    }

    const onHoverOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { value } = e.currentTarget.dataset
        const index = options.findIndex(option => option.value === value)

        setState(prevState => {
            return {
                ...prevState,
                focusedValue: index
            }
        })
    }

    const onClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { value } = e.currentTarget.dataset
        setState(prevState => {
            if (!multiple) {
                return {
                    ...prevState,
                    values: [value as string],
                    isOpen: false
                }
            }

            const [...values] = prevState.values
            const index = values.indexOf(value as string)

            if (index === -1) {
                values.push(value as string)
            } else {
                values.splice(index, 1)
            }

            return {
                ...prevState,
                values
            }
        });
    }

    const renderOptions = () => {
        const { isOpen } = state;
        return (
            isOpen ? <div className="options">
                <div className='disable option'>
                    {placeholder}
                </div>
                {options.map((option, index) => {
                    const { values, focusedValue } = state
                    const { value } = option
                    const selected = values.includes(value)
                    return (
                        <div key={value} data-value={value} onMouseOver={onHoverOption} onClick={onClickOption} className={`option ${selected ? 'selected' : ''} ${index === focusedValue ? 'focused' : ''}`}>
                            {multiple ?
                                <span className="checkbox">
                                    {selected ? <Check /> : null}
                                </span> :
                                null
                            }
                            {value}
                        </div>
                    )
                })}
            </div> : null
        )
    }

    const renderValues = () => {
        const { values } = state
        if (values.length === 0 || !values[0]) {
            return (
                <div className="placeholder">
                    {placeholder}
                </div>
            )
        }

        if (multiple) {
            return values.map(value => {
                return (
                    <span key={value} onClick={(e) => e.stopPropagation()} className="multiple value" >
                        {value}
                        <span data-value={value} onClick={onDeleteOption} className="delete">
                            <X />
                        </span>
                    </span>
                )
            })
        }

        return (
            <div className="value">
                {values[0]}
            </div>
        )
    }


    return (
        <div className="select" tabIndex={0} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown}        >
            <div className="selection" onClick={onClick}>
                {renderValues()}
                <span className="arrow">
                    {state.isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
            </div>
            {renderOptions()}
        </div>
    )
}