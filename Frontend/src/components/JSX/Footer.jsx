import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import LoadingOverlay from './LoadingOverlay';
import { BiInfinite } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { showNotification } from '../../redux/cartSlice';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubscribe = async () => {
        if (!email) {
            dispatch(showNotification('Please enter your email address.'));
            return;
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/subscribe', { email });
            dispatch(showNotification('Subscription successful! Check your email.'));
            setEmail('');
        } catch (error) {
            console.error('Subscription error:', error);
            dispatch(showNotification('Failed to subscribe. Please try again.'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className='container-fluid primary-color-bg py-5'>
            {loading && <LoadingOverlay />}
            <div className='container pt-lg-4'>
                <div className='row g-4'>
                    {/* Brand Section */}
                    <div className='col-lg-3 col-md-6'>
                        <div className="navbar-brand fw-bold fs-3 text-white d-flex align-items-center gap-2 mb-4">
                            <BiInfinite size={40} className="secondary-color" />
                            <span>Infinity</span>
                        </div>
                        <p className='text-white-50 fs-7'>
                            Infinity brings style, comfort, and quality to your home with curated furniture collections. Designed for modern living, our pieces blend function with timeless aesthetics.
                        </p>
                        <div className='d-flex gap-3 mt-4'>
                            <div className='icon-circle border border-white-50 rounded-circle p-2 d-flex align-items-center justify-content-center'>
                                <FaFacebookF size={18} className='text-white' />
                            </div>
                            <div className='icon-circle border border-white-50 rounded-circle p-2 d-flex align-items-center justify-content-center'>
                                <FaInstagram size={18} className='text-white' />
                            </div>
                            <div className='icon-circle border border-white-50 rounded-circle p-2 d-flex align-items-center justify-content-center'>
                                <FaTwitter size={18} className='text-white' />
                            </div>
                            <div className='icon-circle border border-white-50 rounded-circle p-2 d-flex align-items-center justify-content-center'>
                                <FaPinterest size={18} className='text-white' />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='col-lg-2 col-md-6 ps-lg-5'>
                        <h5 className='text-white fw-bold mb-4'>Quick Links</h5>
                        <ul className='list-unstyled footer-links'>
                            <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-white fs-7">Home</Link></li>
                            <li className="mb-2"><Link to="/shop" className="text-white-50 text-decoration-none hover-white fs-7">Shop</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover-white fs-7">About Us</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none hover-white fs-7">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='col-lg-3 col-md-6'>
                        <h5 className='text-white fw-bold mb-4'>Contact Us</h5>
                        <div className='d-flex align-items-start mb-3 gap-3'>
                            <FaMapMarkerAlt className="secondary-color mt-1" />
                            <p className='text-white-50 fs-7 mb-0'>123 Design Street, Creative City, NY 10012, USA</p>
                        </div>
                        <div className='d-flex align-items-center mb-3 gap-3'>
                            <FaPhoneAlt className="secondary-color" />
                            <p className='text-white-50 fs-7 mb-0'>+1 (123) 456-7890</p>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <FaEnvelope className="secondary-color" />
                            <p className='text-white-50 fs-7 mb-0'>hello@infinity.com</p>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className='col-lg-4 col-md-6'>
                        <h5 className='text-white fw-bold mb-4'>Newsletter</h5>
                        <p className='text-white-50 fs-7 mb-4'>Stay updated with the latest trends and exclusive offers.</p>
                        <div className='d-flex flex-column gap-3'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className='bg-transparent border border-white-50 text-white rounded p-3 fs-7 w-100 footer-newsletter-input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className='secondary-color-bg text-dark border-0 rounded py-3 fw-bold text-uppercase w-100'
                                style={{ transition: 'all 0.3s ease' }}
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <hr className='border-secondary mt-5 mb-4' style={{ opacity: 0.2 }} />

                <div className='d-flex flex-md-row flex-column justify-content-between align-items-center gap-3'>
                    <p className='text-white-50 fs-7 mb-0'>
                        Copyright © 2025 <span className="text-white fw-bold">Infinity</span>. All Rights Reserved.
                    </p>
                    <div className="d-flex gap-4">
                        <Link to="#" className="text-white-50 text-decoration-none fs-7 f-hover">Privacy Policy</Link>
                        <Link to="#" className="text-white-50 text-decoration-none fs-7 f-hover">Terms & Conditions</Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer