import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, showNotification } from '../../redux/cartSlice';

import ZoomableImage from './ZoomableImage';

const ProductDetail = ({ id, img1, img2, name, price, description = "Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales.", originalPrice, discount, quantity }) => {
    const [count, setCount] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        if (quantity === 0) {
            dispatch(showNotification(`Sorry, ${name} is out of stock!`));
            return;
        }
        if (count > quantity) {
            dispatch(showNotification(`Only ${quantity} items available in stock!`));
            return;
        }
        const item = { id, name, price, img1, quantity: count };
        dispatch(addToCart(item));
        dispatch(showNotification(`${name} has been added to your cart!`));
    };

    const handleBuyNow = () => {
        if (quantity === 0) {
            dispatch(showNotification(`Sorry, ${name} is out of stock!`));
            return;
        }
        if (count > quantity) {
            dispatch(showNotification(`Only ${quantity} items available in stock!`));
            return;
        }
        const item = { id, name, price, img1, quantity: count };
        dispatch(addToCart(item));
        navigate('/checkout');
    };

    return (
        <div className='container mt-5'>
            <div className='row align-items-center justify-content-center mb-5'>
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
                    <p className={`fw-semibold mb-2 ${quantity > 0 ? 'text-success' : 'text-danger'}`}>
                        {quantity > 0 ? `${quantity} in stock` : 'Out of stock'}
                    </p>

                    {/* Short Description */}
                    <p className="text-muted mb-4">{description.substring(0, 100)}...</p>

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

            {/* Product Tabs Section */}
            <div className="row mt-5">
                <div className="col-12">
                    <ul className="nav nav-tabs border-0 justify-content-center mb-4">
                        <li className="nav-item">
                            <button
                                className={`nav-link text-uppercase fw-bold border-0 bg-transparent ${activeTab === 'description' ? 'active-tab' : 'text-muted'}`}
                                onClick={() => setActiveTab('description')}
                                style={{ borderBottom: activeTab === 'description' ? '2px solid #fdc402' : 'none', color: activeTab === 'description' ? '#0f2e26' : '' }}
                            >
                                Description
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link text-uppercase fw-bold border-0 bg-transparent ${activeTab === 'additional' ? 'active-tab' : 'text-muted'}`}
                                onClick={() => setActiveTab('additional')}
                                style={{ borderBottom: activeTab === 'additional' ? '2px solid #fdc402' : 'none', color: activeTab === 'additional' ? '#0f2e26' : '' }}
                            >
                                Additional Info
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link text-uppercase fw-bold border-0 bg-transparent ${activeTab === 'reviews' ? 'active-tab' : 'text-muted'}`}
                                onClick={() => setActiveTab('reviews')}
                                style={{ borderBottom: activeTab === 'reviews' ? '2px solid #fdc402' : 'none', color: activeTab === 'reviews' ? '#0f2e26' : '' }}
                            >
                                Reviews (2)
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content text-center text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {activeTab === 'description' && (
                            <div className="animate__animated animate__fadeIn">
                                <p>{description}</p>
                                <p>Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                            </div>
                        )}
                        {activeTab === 'additional' && (
                            <div className="animate__animated animate__fadeIn">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th className="bg-light text-dark">Weight</th>
                                            <td>1.5 kg</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-light text-dark">Dimensions</th>
                                            <td>20 × 15 × 30 cm</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-light text-dark">Materials</th>
                                            <td>Wood, Metal, Fabric</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div className="animate__animated animate__fadeIn text-start">
                                <div className="mb-4">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="bg-secondary rounded-circle me-3" style={{ width: '40px', height: '40px' }}></div>
                                        <div>
                                            <h6 className="fw-bold mb-0 text-dark">John Doe</h6>
                                            <small className="text-warning">★★★★★</small>
                                        </div>
                                    </div>
                                    <p>"Excellent quality! Fits perfectly in my living room."</p>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="bg-secondary rounded-circle me-3" style={{ width: '40px', height: '40px' }}></div>
                                        <div>
                                            <h6 className="fw-bold mb-0 text-dark">Jane Smith</h6>
                                            <small className="text-warning">★★★★☆</small>
                                        </div>
                                    </div>
                                    <p>"Fast delivery, but the color was slightly different than expected. Still love it!"</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
