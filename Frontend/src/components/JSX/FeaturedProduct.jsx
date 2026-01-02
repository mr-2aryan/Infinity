import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, showNotification } from '../../redux/cartSlice';
const Accent = "http://localhost:5000/images/accent.webp"
const Accent2 = "http://localhost:5000/images/accent2.webp"

const FeaturedProduct = () => {
    const [count, setCount] = useState(1);
    const [stockQuantity, setStockQuantity] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch the Elegant Accent Chair product (id: 9) to get its quantity
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                const products = await response.json();
                // Find "Elegant Accent Chair" product
                const accentChair = products.find(p => p.name.includes('Accent Chair'));
                if (accentChair) {
                    setStockQuantity(accentChair.quantity);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, []);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const item = {
        id: 9, // Elegant Accent Chair ID
        name: 'Elegant Accent Chair',
        price: '$22.00',
        img1: Accent,
        quantity: count
    };

    const handleAddToCart = () => {
        // Check if out of stock
        if (stockQuantity === 0) {
            dispatch(showNotification(`Sorry, ${item.name} is out of stock!`));
            return;
        }
        // Check if trying to add more than available
        if (count > stockQuantity) {
            dispatch(showNotification(`Only ${stockQuantity} items available in stock!`));
            return;
        }
        dispatch(addToCart({ ...item, quantity: count }));
        dispatch(showNotification(`${item.name} has been added to your cart!`));
    };

    const handleBuyNow = () => {
        // Check if out of stock
        if (stockQuantity === 0) {
            dispatch(showNotification(`Sorry, ${item.name} is out of stock!`));
            return;
        }
        // Check if trying to add more than available
        if (count > stockQuantity) {
            dispatch(showNotification(`Only ${stockQuantity} items available in stock!`));
            return;
        }
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
                        <img src={Accent} alt="Elegant Accent Chair" className='img-fluid w-100' loading="lazy" />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='imag-bg'>
                        <img src={Accent2} alt="Elegant Accent Chair Side View" className='img-fluid w-100' loading="lazy" />
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <h4 className='fw-semibold'>Elegant Accent Chair</h4>
                    <h4 className='fw-bold my-4'>$22.00</h4>
                    {stockQuantity !== null && (
                        <p className={`fw-semibold mb-2 ${stockQuantity > 0 ? 'text-success' : 'text-danger'}`}>
                            {stockQuantity > 0 ? `${stockQuantity} in stock` : 'Out of stock'}
                        </p>
                    )}
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