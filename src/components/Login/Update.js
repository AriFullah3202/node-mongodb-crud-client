import React, { useState } from 'react'
import { useLoaderData } from 'react-router';

const Update = () => {
    const data = useLoaderData();
    const [user, setUser] = useState(data)

    // we post data from to backend application
    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value; //targeting the input field name
        const email = event.target.email.value;
        console.log(name, email)
        console.log(user)

        fetch(`http://localhost:5000/users/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)


        }).then(res => res.json())
            .then(data => {
                console.log(data)
            }).catch(err => [])

    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        console.log(newUser)
        setUser(newUser)
    }

    return (
        <div>
            <>

                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    start your 14-day free trial
  </a>
                            </p>
                        </div>
                        <form onSubmit={handleUpdateUser} className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Name
    </label>
                                    <input
                                        defaultValue={user.name}
                                        onBlur={handleInputBlur}
                                        id="Name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
    </label>
                                    <input
                                        defaultValue={user.email}
                                        onBlur={handleInputBlur}
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>

                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        onBlur={handleInputBlur}
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                    </span>
                                    Sign in
  </button>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        </div>
    )
}

export default Update
