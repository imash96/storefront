"use client"

import DarkModeIcon from "@icons/dark-mode";
import LightModeIcon from "@icons/light-mode";
import { useEffect, useState } from "react";

type colorProp = "light" | "dark"

export default function ThemeButton() {
    const [mode, setMode] = useState<colorProp | undefined>(undefined)
    useEffect(() => {
        const theme = document.documentElement.dataset.theme as colorProp
        setMode(theme)
    }, [])

    function handleClick() {
        setMode((mode) => {
            if (mode == 'light') {
                document.documentElement.dataset.theme = 'dark';
                document.cookie = "theme=dark";
                return 'dark'
            }
            document.documentElement.dataset.theme = 'light';
            document.cookie = "theme=light";
            return 'light'
        })
    }

    return (
        <button onClick={handleClick} className="p-3 hover:text-grey-55 hover:bg-grey-8 rounded cursor-pointer">
            {mode === 'light' ? <DarkModeIcon className="h-6 w-6" /> : <LightModeIcon className="h-6 w-6" />}
        </button>
    )
}