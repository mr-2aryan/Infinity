import React, { useState } from 'react'
import axios from 'axios';
import LoadingOverlay from './LoadingOverlay';
import { BiInfinite } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/subscribe', { email });
            alert('Subscription successful! Check your email for a welcome message.');
            setEmail('');
        } catch (error) {
            console.error('Subscription error:', error);
            alert('Failed to subscribe. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container-fluid primary-color-bg py-5'>
            {loading && <LoadingOverlay />}
            <div className='container py-lg-3'>
                <div className='row align-items-center'>
                    <div className='col-lg-4 col-12'>
                        <div className="navbar-brand fw-bold fs-3 text-white d-flex align-items-center gap-2">
                            <BiInfinite size={50} />
                            <span>Infinity</span>
                        </div>
                        <div>
                            <p className='text-white fs-7 mt-3'>At Infinity, we bring style, comfort, and quality to your home with carefully curated furniture collections. Designed for modern living, our pieces blend functionality with timeless aesthetics. Experience exceptional craftsmanship and elevate your space with us!</p>
                        </div>
                        <div className='d-flex gap-3 mt-4'>
                            <div className='icon-circle'>
                                <FaFacebookF size={20} className='text-white' />
                            </div>
                            <div className='icon-circle'>
                                <FaInstagram size={20} className='text-white' />
                            </div>
                            <div className='icon-circle'>
                                <FaTwitter size={20} className='text-white' />
                            </div>
                            <div className='icon-circle'>
                                <FaPinterest size={20} className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-12 ps-lg-5'>
                        <div className=' align-items-center'>
                            <div>
                                <h5 className='text-white text-uppercase'>Subscribe Newsletter</h5>
                                <p className='text-white fs-7 text-lowercase'>STAY UPDATED WITH THE LATEST TRENDS</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className='w-100 custom py-3 ps-4 fw-semibold'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className='ms-3 submit py-3 px-5 fw-semibold' onClick={handleSubscribe}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-white fs-7 mt-5 mb-0'>Copyright © 2025 Infinity.
                        All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer