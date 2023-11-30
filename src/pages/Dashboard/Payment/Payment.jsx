
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useState } from 'react';
import Swal from 'sweetalert2';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
    const param = useParams();
    const axiosSecure = useAxiosSecure();
    const id = param.id;
    const [date, setDate] = useState('');
    // console.log(newDate)

    const { data: employeePayment, refetch } = useQuery({
        queryKey: ['employeePayment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allusers/HR/${id}`);
            return res.data;
        }
    })

    const [salary, setSalary] = useState(employeePayment?.salary)

    const checkDate = async (temp) => {
        const res = await axiosSecure.get(`/payments/${employeePayment.email}`)
        const duplicateDate = res.data.find(item => item.date == temp)
        if (duplicateDate) {
            Swal.fire({
                title: "Warning!",
                text: "For this month salary has been already paid. You can not pay again",
                icon: "warning"
            });

            refetch();
            return setDate('');
        }
        setDate(temp);
        setSalary(employeePayment?.salary);
    }


    const handleMonth = (e) => {
        const temp = e.target.value;
        checkDate(temp);
    }
    const handleSalary = (e) => {
        setSalary(e.target.value);
    }

    return (
        <div>
            <h1 className="text-3xl text-green-500">Salary Amount: {employeePayment?.salary}</h1>
            <div className='divider'></div>
            <div className='bg-green-200 p-8 rounded-3xl'>
                <label className="label">
                    <span className="label-text font-bold">ATTENTION: Select Month to pay</span>
                </label>
                <input type="month" onChange={handleMonth} className='input input-bordered' name="month" id="" />
                <label className="label">
                    <span className="label-text font-bold">Salary</span>
                </label>
                <input type="number" onChange={handleSalary} defaultValue={employeePayment?.salary} className='input input-bordered' name="month" id="" />
            </div>
            {/* stripe payment */}
            <div className='my-8 bg-green-100 p-8 rounded-3xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm salary={salary} date={date} email={employeePayment?.email}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;