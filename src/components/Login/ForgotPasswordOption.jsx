export function ForgotPasswordOption(property) {
    return (
        property === "signup" ?
            " ":
            <a href="/ResetPassword" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Esqueceu a senha?
            </a>
    )
}