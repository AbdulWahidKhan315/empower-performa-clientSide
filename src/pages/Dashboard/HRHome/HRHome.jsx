import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { RxCross2 } from 'react-icons/rx';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HRHome = () => {

    const axiosSecure = useAxiosSecure();
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
            <h2 className="text-4xl">All Employee</h2>
            <div className="my-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Bank Ac No.</th>
                                <th>Designation</th>
                                <th>salary</th>
                                <th>Verified Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee && employee.map((employ, index) =>
                                    <tr key={employ._id}>
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
                                        <td>{employ.salary}</td>
                                        <th>
                                            <button onClick={() => handleVerified(employ._id)} className="btn btn-ghost">{employ.verified == true ? <FaCheck className="text-3xl font-bold text-green-500"></FaCheck> : <RxCross2 className="text-3xl font-bold text-red-500"></RxCross2>}</button>
                                        </th>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HRHome;