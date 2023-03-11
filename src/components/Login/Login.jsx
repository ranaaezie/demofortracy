import {render} from "react-dom";
import {WatchContext} from "./WatchContext";
import {ForgotPasswordOption} from "./ForgotPasswordOption";

export function Login(option) {

    return (
        <div id={"_layout"}>
            <div class= "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img src={require("./kiwify-green-logo.2af0e50.png")} alt="Workflow" className="mx-auto h-12 w-auto"/>
                        <WatchContext property={option}/>
                        <p className="mt-2 text-center text-base leading-5 text-gray-600">
                            Ou
                            <a href="/signup?redirect=%2Fsignup%C2%A0-" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                fazer cadastro
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={function (event) {
                            if (option === "sigin") {
                                event.preventDefault();
                                const data = new FormData(event.target);
                                fetch('/api/login', {
                                    method: 'POST',
                                    body: data,
                                }).then(function (response) {
                                    return response.json();
                                }).then(function (response) {
                                    if (response.status === "success") {
                                        window.location.href = "/dashboard";
                                    } else {
                                        alert(response.message);
                                    }
                                });
                            } else {
                                event.preventDefault();
                                const data = new FormData(event.target);
                                fetch('/api/signup', {
                                    method: 'POST',
                                    body: data,
                                }).then(function (response) {
                                    return response.json();
                                }).then(function (response) {
                                    if (response.status === "success") {
                                        window.location.href = "/email_verification";
                                    } else {
                                        alert(response.message);
                                    }
                                });
                            }
                        }}>
                            <div>
                                <label htmlFor="email" className="block text-left text-sm font-medium leading-5 mb-1 text-gray-700">
                                    E-mail
                                </label>
                                <div>
                                    <input type="text" autoComplete="username" name="email"
                                           className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                                            onChange={function (event) {
                                                    event.target.value.includes("@" && ".com") ? event.target.classList.remove("border-red-500") : event.target.classList.add("border-red-500");
                                            }
                                            }
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="password" className="block text-left text-sm font-medium leading-5 text-gray-700">
                                    Senha
                                </label>
                                <div> <input type="password" autoComplete="current-password" name="password"
                                             className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"/>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center justify-end">
                                <div className="text-sm leading-5">
                                    <ForgotPasswordOption property={option}/>
                                </div>

                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Entrar
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )


}