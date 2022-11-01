import React, { useState } from 'react'
import { useLoaderData, useResolvedPath } from 'react-router';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const user = useLoaderData();
    const [displayUser, setDisplayUser] = useState(user);
    const handleDelete = (user) => {
        // agree varible ok dile true hbe . and cancel korle false hbe
        const agree = window.confirm(`Are you sure you want to delete : ${user.name}`)
        //ekhane true hole execute hbe
        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // data er moddhe 2 ta property de . tar moddhe ekta deletedCount eti return korbe =1
                    if (data.deletedCount > 0) {
                        console.log("delete successfufl")
                        const remaining = displayUser.filter(usr => usr._id !== user._id)
                        setDisplayUser(remaining)
                    }
                })
                .catch(err => { "does not delete" })
        }

    }

    return (

        < div className="container p-2 mx-auto sm:p-4 dark:text-gray-100" >
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

                            displayUser.map(user =>

                                <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="py-3 -pl-3">{user._id}</td>
                                    <td className="p-3">{user.name}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">
                                        <button onClick={() => handleDelete(user)}>Delete</button>
                                        <Link className="p-3" to={`/update/${user._id}`} >Edit</Link>
                                    </td>
                                    {

                                        console.log("rentder")
                                    }
                                </tr>
                            )

                        }


                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default DashBoard
