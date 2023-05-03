import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './PaymentForm'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';

const PayGate = () => {
    const stripePromise = loadStripe('pk_test_51N1eJCSJpCP13nf2ER69nWzP1QtKFPCxWM4XK0IGLuUarpKfRvVtXkxxrRJqSBQDI5hV6EA0OK0nqzh4i10fvVOJ00VUuGYY2W');
    return (
        <div>

            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            </div>
        </div>

    )
}

export default PayGate