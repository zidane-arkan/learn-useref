import React, { useRef, useState } from "react";
import Input from './ui/Input.jsx';
const Login = () => {
    const [email, setEmail] = useState();
    const emailValue = useRef();

    const submitValue = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(emailValue.current.value);
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/4 bg-cover-img">
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Howdie You All
                            </h2>

                            <p className="max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                molestia
                            </p>
                        </div>
                    </div>
                </div>
                <aside className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/4">
                    <div className="flex-1">
                        <div className="text-center">
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>
                        <div className="mt-8">
                            <form onSubmit={submitValue}>
                                <Input ref={emailValue} statusInput={"email"} />
                                <Input classValue="mt-6" statusInput={"password"} />
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Login;
