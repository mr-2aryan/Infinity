import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, showNotification } from '../../redux/cartSlice';

import ZoomableImage from './ZoomableImage';

const ProductDetail = ({ id, img1, img2, name, price, description = "Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales.", originalPrice, discount }) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        const item = {
            id,
            name,
            price,
            img1,
            quantity: count
        };
        dispatch(addToCart(item));
        dispatch(showNotification(`${name} has been added to your cart!`));
    };

    const handleBuyNow = () => {
        const item = {
            id,
            name,
            price,
            img1,
            quantity: count
        };
        dispatch(addToCart(item));
        navigate('/checkout');
    };

    return (
        <div className='container mt-5'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-lg-4 col-12'>
                    <div className='imag-bg'>
                        <ZoomableImage src={img1} alt={name} className='img-fluid w-100' />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='imag-bg'>
                        <ZoomableImage src={img2} alt={name} className='img-fluid w-100' />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <h4 className='fw-semibold'>{name}</h4>
                    <div className='d-flex align-items-center gap-2'>
                        <h4 className='fw-bold my-4'>{price}</h4>
                        {originalPrice && <h5 className='text-muted text-decoration-line-through'>{originalPrice}</h5>}
                        {discount && <span className='badge bg-warning text-dark'>{discount}</span>}
                    </div>
                    <p>{description}</p>
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

export default ProductDetail
