import React from 'react';
import { useCart } from '../../../hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    const stripePromise = loadStripe('pk_test_51NGxRvFLPuXl3J7VsGCbqirMOsxDB9QJ0jngZFKc6CGUvpeFXIr72XeErslfYy774041AGZ0B4sjRCK0NiW3u1rR00OOFFohO1');
    return (
        <div>
            <h1 className='text-center my-10 text-3xl text-blue-700 font-bold'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;