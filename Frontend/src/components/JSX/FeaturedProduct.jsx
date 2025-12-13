import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, openCart } from '../../redux/cartSlice';
const Accent = "http://localhost:5000/images/accent.webp"
const Accent2 = "http://localhost:5000/images/accent2.webp"

const FeaturedProduct = () => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const item = {
        id: 'featured-1',
        name: 'Elegant Wooden Accent Chair Design',
        price: '$22.00',
        img1: Accent,
        quantity: count
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...item, quantity: count }));
        dispatch(openCart());
    };

    const handleBuyNow = () => {
        dispatch(addToCart({ ...item, quantity: count }));
        navigate('/checkout');
    };

    return (
        <div className='container mt-5'>
            <div className='py-lg-5 py-3'>
                <div className='col-lg-6 col-12'>
                    <h2>Featured Products</h2>
                    <p>CRAFTED FOR YOUR HOME</p>
                </div>
            </div>
            <div className='row align-items-center justify-content-center'>
                <div className='col-lg-4 col-12'>
                    <div className='imag-bg'>
                        <img src={Accent} alt="" className='img-fluid w-100' />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='imag-bg'>
                        <img src={Accent2} alt="" className='img-fluid w-100' />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <h4 className='fw-semibold'>Elegant Wooden Accent Chair Design</h4>
                    <h4 className='fw-bold my-4'>$22.00</h4>
                    <p>Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales. Integer gravida odio in sem laoreet tempus.</p>
                    <div className='row align-items-center'>
                        <div className='col-4'>
                            <div className='quantity-box'>
                                <button className='qty-btn' onClick={decrement}>-</button>
                                <span className='fw-bold'>{count}</span>
                                <button className='qty-btn' onClick={increment}>+</button>
                            </div>
                        </div>
                        <div className='col-8 ps-0'>
                            <button className='cart-btn w-100 py-2 fw-medium' onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <button className='buy-btn w-100 py-3 fw-medium' onClick={handleBuyNow}>Buy It Now</button>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <div className='d-flex align-items-center'>
                        <p className='fw-semibold'>Estimated Delivery :</p>
                        <p className='ms-2'>2-3 days</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='fw-semibold'>Free Shipping & Returns :</p>
                        <p className='ms-2'>On all order over $200.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct