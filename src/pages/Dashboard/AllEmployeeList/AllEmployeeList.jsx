import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaListUl } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

const AllEmployeeList = () => {

    const { user } = useContext(AuthContext);
    const [display, setDisplay] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { data: allUsersList, refetch } = useQuery({
        queryKey: [user?.email, 'allUserList'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allusers/admin`);
            return res.data;
        }
    })
    const verifiedEmployee = allUsersList?.filter(user => user.verified === true)
    const onlyHR = allUsersList?.filter(user => user.role === 'hr');

    const handleMakeHR = (id) => {
        Swal.fire({
            title: "Do you want to make him/her HR",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/admin/makeHR/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "This user became HR.",
                                icon: "success"
                            });
                            refetch().then(() => {
                                refetch();
                            });
                        }
                    })

            }
        });
    }

    const handleFire = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to fire this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)

                axiosSecure.put(`/admin/makeFired/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Fired!",
                                text: "User has been Fired successfully.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })


            }
        });
    }

    return (
        <div>
            <h3 className="text-4xl text-center font-bold text-green-500 mb-10">All Employee List</h3>
            <div className="flex justify-end mb-2" onClick={() => setDisplay(!display)} >
                {
                    display ? <h3 className="border-2 border-green-500 rounded-lg p-2"><FaListUl className="font-bold text-xl "></FaListUl></h3> :
                        <h3 className="border-2 border-green-500 rounded-lg p-2"><BsGrid3X3GapFill className="font-bold text-xl "></BsGrid3X3GapFill></h3>
                }
            </div>
            {
                display ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            verifiedEmployee?.map(empoey => <div key={empoey._id} className="card bg-green-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title ">Name: {empoey.name}</h2>
                                    <p><span className="font-bold">Designation:</span> {empoey.designation}</p>
                                    <div className="card-actions flex justify-between">
                                        <button onClick={() => handleMakeHR(empoey._id)} className="btn btn-outline btn-success">Make HR</button>
                                        {
                                            empoey?.status ? <span className="font-bold text-red-500">{empoey.status}</span>
                                                :
                                                <button onClick={() => handleFire(empoey._id)} className="btn btn-outline btn-success">Fire</button>
                                        }
                                    </div>
                                </div>
                            </div>)
                        }
                        {
                            onlyHR?.map(empoey => <div key={empoey._id} className="card bg-green-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Name: {empoey.name}</h2>
                                    <p>{empoey.designation}</p>
                                    <div className="card-actions flex justify-between">
                                        <h1 className="text-xl font-bold text-violet-600">--HR--</h1>
                                        {
                                            empoey?.status ? <span className="font-bold text-red-500">{empoey.status}</span>
                                                :
                                                <button onClick={() => handleFire(empoey._id)} className="btn btn-outline btn-success">Fire</button>
                                        }
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </> : <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="bg-green-300">
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Make HR</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    verifiedEmployee?.map((verified) =>
                                        <tr key={verified._id} className="bg-green-100">
                                            <td>{verified?.name}</td>
                                            <td>{verified.designation}</td>
                                            <td>
                                                <button onClick={() => handleMakeHR(verified._id)} className="btn btn-outline btn-success">Make HR</button>
                                            </td>
                                            <td>
                                                {
                                                    verified?.status ? <span className="font-bold text-red-500">{verified.status}</span>
                                                        :
                                                        <button onClick={() => handleFire(verified._id)} className="btn btn-outline btn-success">Fire</button>
                                                }
                                            </td>
                                        </tr>)
                                }
                                {
                                    onlyHR?.map((hr) =>
                                        <tr key={hr._id} className="bg-green-100">
                                            <td>{hr.name}</td>
                                            <td>{hr.designation}</td>
                                            <td>
                                                <h1 className="text-xl font-bold text-violet-600">--HR--</h1>
                                            </td>
                                            <td>
                                                {
                                                    hr?.status ? <span className="font-bold text-red-500">{hr.status}</span>
                                                        :
                                                        <button onClick={() => handleFire(hr._id)} className="btn btn-outline btn-success">Fire</button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </>
            }


        </div>
    );
};

export default AllEmployeeList;