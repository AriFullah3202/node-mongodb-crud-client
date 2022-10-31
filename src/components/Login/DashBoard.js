import React from 'react'
import { useLoaderData, useResolvedPath } from 'react-router';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const user = useLoaderData();
    console.log(user)
    const handleDelete = (id) => {
        console.log("click", id)
    }

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight"><Link to={"/addUser"}>AddUser</Link ></h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="dark:bg-gray-700">
                            <tr className="text-center">
                                <th className="py-3">Id</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                user.map(user => <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="py-3 -pl-3">{user._id}</td>
                                    <td className="p-3">{user.name}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3"><Link onClick={() => handleDelete(user._id)} href={user._id} >Delete</Link><Link className="p-3" onClick={() => handleDelete(user._id)} href={user._id}>Edit</Link>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
