import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaListUl } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [display, setDisplay] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })
    const customSort = (a, b) => {
        const dateA = a.date;
        const dateB = b.date;
        if (dateA > dateB) return 1;
        else if (dateA < dateB) return -1;
        return 0;
    }

    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-green-500">This is your Payment History</h2>
            <div className="my-10">
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
                                paymentHistory.sort(customSort)?.map(single => <div key={single._id} className="card bg-green-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Name: {user?.displayName}</h2>
                                        <p><span className="font-bold">Transaction ID:</span> {single.transactionId}</p>
                                        <div className="card-actions justify-end">
                                            <p><span className="font-bold">Date:</span> {single.date}</p>
                                            <p><span className="font-bold">Amount:</span> ${single.amount}</p>
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
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Transaction ID</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        paymentHistory.sort(customSort)?.map((history, index) =>
                                            <tr key={history._id} className="bg-green-100">
                                                <th>{index + 1}</th>
                                                <td>{user?.displayName}</td>
                                                <td>{history.date}</td>
                                                <td>{history.transactionId}</td>
                                                <td>${history.amount}</td>
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

export default PaymentHistory;