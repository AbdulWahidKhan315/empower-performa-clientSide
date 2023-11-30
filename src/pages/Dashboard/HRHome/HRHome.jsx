import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { RxCross2 } from 'react-icons/rx';
import { FaCheck, FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";

const HRHome = () => {

    const axiosSecure = useAxiosSecure();
    const [display, setDisplay] = useState(false);
    const { data: employee, refetch } = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allusers/HR');
            return res.data;
        }
    })

    const handleVerified = async (id) => {
        const verifiedRes = await axiosSecure.patch(`/allusers/HR/${id}`);
        if (verifiedRes.data.modifiedCount > 0) {
            refetch();
        }
    }



    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-green-500">All Employee</h2>
            <div className="flex justify-end mb-2" >
                {
                    display ? <h3 onClick={() => setDisplay(!display)} className="border-2 border-green-500 rounded-lg p-2"><FaListUl className="font-bold text-xl "></FaListUl></h3> :
                        <h3 onClick={() => setDisplay(!display)} className="border-2 border-green-500 rounded-lg p-2"><BsGrid3X3GapFill className="font-bold text-xl "></BsGrid3X3GapFill></h3>
                }
            </div>
            <div className="mb-10">
                {
                    display ? <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                employee && employee.map(empl => <div key={empl._id} className="card bg-green-100 shadow-xl image-full">
                                    <figure><img src={empl.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title font-bold">Name: {empl.name}</h2>
                                        <div className="">
                                            <p><span className="font-bold">Email:</span> {empl.email}</p>
                                            <p><span className="font-bold">Bank Ac No:</span> {empl.bankAccout}</p>
                                        </div>
                                        <p><span className="font-bold">Salary:</span> ${empl.salary}</p>
                                        <div className="card-actions flex justify-between">
                                            <div>
                                                <Link to={`/dashboard/userDetailsForHR/${empl._id}`}>
                                                    <button className="btn btn-outline btn-secondary font-bold text-violet-500">Details</button>
                                                </Link>
                                            </div>
                                            <div className="flex gap-1">
                                                <div>
                                                    <button onClick={() => handleVerified(empl._id)} className="btn btn-outline btn-warning">{empl.verified == true ? <FaCheck className="text-3xl font-bold text-green-500"></FaCheck> : <RxCross2 className="text-3xl font-bold text-red-500"></RxCross2>}</button>
                                                </div>
                                                <div>
                                                    {
                                                        empl.verified == true &&
                                                        <Link to={`/dashboard/payment/${empl._id}`}>
                                                            <button className="btn btn-success font-bold text-white">Pay</button>
                                                        </Link>
                                                    }
                                                    {
                                                        empl.verified == false &&
                                                        <button className="btn btn-success font-bold text-white">Pay<span className="text-xs">Disabled</span></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </> : <>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="bg-green-300">
                                        <th>
                                            No.
                                        </th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Bank Ac No.</th>
                                        <th>Designation</th>
                                        <th>salary</th>
                                        <th>Details</th>
                                        <th>Verified Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employee && employee.map((employ, index) =>
                                            <tr key={employ._id} className="bg-green-100">
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={employ.photo} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {employ.name}
                                                </td>
                                                <td>{employ.email}</td>
                                                <td>{employ.bankAccout}</td>
                                                <td>
                                                    {
                                                        employ.verified == true &&
                                                        <Link to={`/dashboard/payment/${employ._id}`}>
                                                            <button className="btn btn-ghost font-bold text-green-300">Pay</button>
                                                        </Link>
                                                    }
                                                    {
                                                        employ.verified == false &&
                                                        <button className="btn btn-ghost font-bold text-green-300" disabled>Pay</button>
                                                    }
                                                </td>
                                                <td>${employ.salary}</td>
                                                <td>
                                                    <Link to={`/dashboard/userDetailsForHR/${employ._id}`}>
                                                        <button className="btn btn-ghost font-bold text-violet-500">Details</button>
                                                    </Link>
                                                </td>
                                                <th>
                                                    <button onClick={() => handleVerified(employ._id)} className="btn btn-ghost">{employ.verified == true ? <FaCheck className="text-3xl font-bold text-green-500"></FaCheck> : <RxCross2 className="text-3xl font-bold text-red-500"></RxCross2>}</button>
                                                </th>
                                            </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </>
                }


            </div>
        </div>
    );
};

export default HRHome;