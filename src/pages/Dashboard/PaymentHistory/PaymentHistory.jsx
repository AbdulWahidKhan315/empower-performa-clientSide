import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })
    const customSort = (a,b)=>{
        const dateA = a.date;
        const dateB = b.date;
        if(dateA > dateB) return 1;
        else if(dateA < dateB) return -1;
        return 0;
    }
    
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-green-500">This is your Payment History</h2>
            <div className="my-10">
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
                            paymentHistory.sort(customSort)?.map((history,index) => 
                                <tr key={history._id} className="bg-green-100">
                                <th>{index + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{history.date}</td>
                                <td>{history.transactionId}</td>
                                <td>{history.amount}</td>
                            </tr>    )
                        }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;