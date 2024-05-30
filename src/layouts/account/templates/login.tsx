"use client"

import { useState } from "react"
import Login from "../components/login"
import Register from "../components/register"

export enum LOGIN_VIEW {
    SIGN_IN = "sign-in",
    REGISTER = "register",
}

const LoginTemplate = () => {
    const [currentView, setCurrentView] = useState("sign-in")

    return (
        <div className="w-full flex justify-start px-8">
            {currentView === "sign-in" ? <Login setCurrentView={setCurrentView} /> : <Register setCurrentView={setCurrentView} />}
        </div>
    )
}

export default LoginTemplate