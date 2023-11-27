
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useState } from 'react';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
    const param = useParams();
    const axiosSecure = useAxiosSecure();
    const id = param.id;
    const [date,setDate]=useState('')

    const { data: employeePayment } = useQuery({
        queryKey: ['employeePayment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allusers/HR/${id}`);
            return res.data;
        }
    })
    const handleMonth=(e)=>{
        setDate(e.target.value);
    }

    return (
        <div>
            <h1 className="text-3xl text-green-500">Salary Amount: {employeePayment?.salary}</h1>
            <div className='divider'></div>
            <div className='bg-green-200 p-8 rounded-3xl'>
                <label className="label">
                    <span className="label-text font-bold">ATTENTION: Select Month to pay</span>
                </label>
                <input type="month" onChange={handleMonth}  className='input input-bordered' name="month" id="" />
            </div>
            {/* stripe payment */}
            <div className='my-8 bg-green-100 p-8 rounded-3xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm salary={employeePayment?.salary} date={date}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;