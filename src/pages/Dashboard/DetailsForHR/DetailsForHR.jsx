import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const DetailsForHR = () => {
    const axiosSecure = useAxiosSecure();
    const params = useParams();
    const id = params.id;
    const [chartData, setChartData] = useState([])

    const { data: employeeDetails } = useQuery({
        queryKey: ['employeePayment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allusers/HR/${id}`);
            return res.data;
        }
    })
    // console.log(employeeDetails)

    useEffect(() => {
        axiosSecure.get(`/payments/${employeeDetails?.email}`)
            .then(res => {
                setChartData(res.data);
            })
    }, [axiosSecure, employeeDetails])

    
    return (
        <div>
            <div className="card lg:card-side bg-green-100 shadow-xl">
                <figure><img src={employeeDetails?.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl md:text-5xl font-bold">{employeeDetails?.name}</h2>
                    <p><span className="font-bold text-xl">Designation:</span> {employeeDetails?.designation}</p>
                    <p><span className="font-bold text-xl">Salary:</span> {employeeDetails?.salary}</p>
                    <p><span className="font-bold text-xl">Verified:</span> {employeeDetails?.verified == true ? 'True' : 'False'}</p>

                </div>
            </div>
            <div>
                <h1 className="text-4xl my-4 underline underline-offset-8 font-bold text-green-700">Employee Salary Chart:</h1>
                <BarChart
                    width={600}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={50}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" stackId="a" fill="#82ca9d" />
                    
                </BarChart>
            </div>
        </div>
    );
};

export default DetailsForHR;