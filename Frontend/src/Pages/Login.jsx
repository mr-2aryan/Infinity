import React from 'react'
import { BiInfinite } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { showNotification } from '../redux/cartSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log('Login component rendered');

    const handleLogin = () => {
        // Change credentials here
        if (email === 'admin@infinity.com' && password === 'admin123') {
            dispatch(login(rememberMe));
            dispatch(showNotification('Login Successful!'));
            navigate('/');
        } else {

            dispatch(showNotification('Invalid Credentials!'));
        }
    };

    return (
        <div className='primary-color-bg vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#0f2e26', minHeight: '100vh' }}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-12'>
                        <div className='p-5 login-card' style={{ backgroundColor: '#163f34' }}>
                            <div className='d-flex align-items-center'>
                                <BiInfinite size={80} className='secondary-color' />
                                <p className='mb-0 fs-2 ps-3 fw-semibold secondary-color'>Login To Infinity</p>
                            </div>

                            <div className='mt-4'>
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    className='w-100 py-3 ps-3 fs-6 login-input'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mt-4 position-relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter Your Password'
                                    className='w-100 py-3 ps-3 fs-6 login-input'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className='position-absolute'
                                    style={{ right: '15px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#000' }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </span>
                            </div>
                            <div className='mt-4 d-flex align-items-center'>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        accentColor: '#fdc402',
                                        cursor: 'pointer'
                                    }}
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className='ms-2 text-white'
                                    style={{ cursor: 'pointer' }}
                                >
                                    Remember Me
                                </label>
                            </div>
                            <div className='mt-4'>
                                <button className='w-100 py-3 fs-5 login-btn' onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
