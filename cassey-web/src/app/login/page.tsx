import BASE_URL from '../BaseURL'
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'
import ClientFlashComponent from '@/components/ClientFlash';

export type Response<T = {}> = {
    data?: T;
    messsage?: string;
}

export default function LoginPage() {
    const handleLogin = async (formData: FormData) => {
        'use server'
        const email = formData.get('email')
        const password = formData.get('password')
        // console.log(name, username, email, password);

        const response = await fetch(
            `${BASE_URL}/api/users/login/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })

        const result = (await response.json()) as Response<{
            token: string
        }>;

        if (!response.ok) {
            return redirect('login?error=' + result.messsage)
        }

        if (result.data) cookies().set("Authorization", `Bearer ${result.data.token}`)
        return redirect('/products')
    }
    return (
        <>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img
                        src="https://pbs.twimg.com/media/Em6QNXnVkAIDQei?format=jpg&name=large"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
                >
                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 font-Montserrat">
                            Log in to your account
                        </h1>
                        <ClientFlashComponent/>                        <form className="mt-6" action={handleLogin} method="POST">
                            <div>
                                <label className="block text-gray-700 font-Montserrat">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    placeholder="Enter Email Address"
                                    autoComplete="email"
                                    required
                                    className="font-Montserrat rounded-full w-full px-4 py-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 font-Montserrat">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    required
                                    className="font-Montserrat w-full px-4 py-3 rounded-full mt-2 border focus:border-blue-500
                                    focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="text-right mt-2">
                                <a
                                    href="#"
                                    className="text-sm font-Montserrat font-Montserrat text-gray-700 hover:text-blue-700 focus:text-blue-700"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-400 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Login
                            </button>
                        </form>
                        <hr className="my-6 border-gray-300 w-full" />
                        <button
                            type="button"
                            className="w-full text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-blue-400 hover:bg-gradient-to-bl hover:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                        >
                            <div className="flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="w-6 h-6"
                                    viewBox="0 0 48 48"
                                >
                                    <defs>
                                        <path
                                            id="a"
                                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                        />
                                    </defs>
                                    <clipPath id="b">
                                        <use xlinkHref="#a" overflow="visible" />
                                    </clipPath>
                                    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                    <path
                                        clipPath="url(#b)"
                                        fill="#EA4335"
                                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                                    />
                                    <path
                                        clipPath="url(#b)"
                                        fill="#34A853"
                                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                                    />
                                    <path
                                        clipPath="url(#b)"
                                        fill="#4285F4"
                                        d="M48 48L17 24l-4-3 35-10z"
                                    />
                                </svg>
                                <span className="ml-4">Log in with Google</span>
                            </div>
                        </button>
                        <p className="mt-8">
                            Need an account?{" "}
                            <a
                                href="/register"
                                className="text-blue-500 hover:text-blue-700 font-Montserrat"
                            >
                                Create an account
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}