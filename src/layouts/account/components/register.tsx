import Input from "@/modules/common/input"
import { LOGIN_VIEW } from "../templates/login"
import ErrorMessage from "@/modules/common/error-message"
import LocalizedClientLink from "@/modules/common/localized-client-link"
import Button from "@/modules/common/button"
import { useFormState } from "react-dom"
import { signUp } from "@/modules/account/actions"

type Props = {
    setCurrentView: (view: LOGIN_VIEW) => void
}

export default function Register({ setCurrentView }: Props) {
    const [message, formAction] = useFormState(signUp, null)
    return (
        <div className="max-w-sm flex flex-col items-center">
            <h1 className="text-large-semi uppercase mb-6">
                Become a Medusa Store Member
            </h1>
            <p className="text-center text-base-regular text-grey-81 mb-4">
                Create your Medusa Store Member profile, and get access to an enhanced
                shopping experience.
            </p>
            <form className="w-full flex flex-col" action={formAction}>
                <div className="flex flex-col w-full gap-y-2">
                    <Input
                        label="First name"
                        name="first_name"
                        required
                        autoComplete="given-name"
                        id="first-name-input"
                    />
                    <Input
                        label="Last name"
                        name="last_name"
                        required
                        autoComplete="family-name"
                    />
                    <Input
                        label="Email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                    />
                    <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
                    <Input
                        label="Password"
                        name="password"
                        required
                        type="password"
                        autoComplete="new-password"
                    />
                </div>
                {message && <ErrorMessage error={message} />}
                <span className="text-center text-grey-81 text-small-regular mt-6">
                    By creating an account, you agree to Medusa Store&apos;s{" "}
                    <LocalizedClientLink
                        href="/content/privacy-policy"
                        className="underline"
                    >
                        Privacy Policy
                    </LocalizedClientLink>{" "}
                    and{" "}
                    <LocalizedClientLink
                        href="/content/terms-of-use"
                        className="underline"
                    >
                        Terms of Use
                    </LocalizedClientLink>
                    .
                </span>
                <Button className="w-full mt-6 bg-blue-1">Join</Button>
            </form>
            <span className="text-center text-grey-81 text-small-regular mt-6">
                Already a member?{" "}
                <button
                    onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
                    className="underline"
                >
                    Sign in
                </button>
                .
            </span>
        </div>
    )
}