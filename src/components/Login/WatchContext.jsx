export function WatchContext(property) {
    return (
        property === "signup" ?
            <h2
                className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                inscreva-se na sua conta
            </h2> :
            <h2
                className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Entrar na sua conta
            </h2>
    )
}