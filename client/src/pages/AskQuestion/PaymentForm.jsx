import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css'

export const PaymentForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCardComplete, setIsCardComplete] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMessage(error.message);
            setIsProcessing(false);
        } else {
            // Send the payment method ID to your server to complete the payment
            console.log('PaymentMethod created:', paymentMethod);
            setIsProcessing(false);
        }
    };

    return (
        <div className='payment-container'>
            <stripe-pricing-table
                pricing-table-id="prctbl_1N3cHjSJpCP13nf2PK8nxAEj"
                publishable-key="pk_test_51N1eJCSJpCP13nf2ER69nWzP1QtKFPCxWM4XK0IGLuUarpKfRvVtXkxxrRJqSBQDI5hV6EA0OK0nqzh4i10fvVOJ00VUuGYY2W"
            >
            </stripe-pricing-table>
        </div>
    );

};

export default PaymentForm;
