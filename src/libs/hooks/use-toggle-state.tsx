import { useState } from "react"

export type StateType = {
    state: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

const useToggleState = (initialState = false) => {
    const [state, setState] = useState<boolean>(initialState)

    const close = () => setState(false)

    const open = () => setState(true)

    const toggle = () => setState((state) => !state)

    const hookData: StateType = {
        state,
        open,
        close,
        toggle
    }
    return hookData
}

export default useToggleState