import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CheckoutForm = ({ salary, date }) => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const totalSalary = parseInt(salary);
    const navigate = useNavigate();


    useEffect(() => {
        if (totalSalary > 0) {
            axiosSecure.post('/create-payment-intent', { salary: totalSalary })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalSalary])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('paymentMethod', paymentMethod);
            setError('');
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const payment = {
                    email: user.email,
                    amount: totalSalary,
                    transactionId: paymentIntent.id,
                    date: date,
                    status: 'paid'
                }
                const res = await axiosSecure.post('/payments',payment);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/HRhome')
                }
                
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn bg-green-500 text-white hover:bg-violet-500 my-4" type="submit" disabled={!stripe || !clientSecret || !date}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {
                transactionId && <p className="text-green-600">{`Your transaction id: ${transactionId}`}</p>
            }
        </form>
    );
};

export default CheckoutForm;