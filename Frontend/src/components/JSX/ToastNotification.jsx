import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../../redux/cartSlice';
import { FaCheckCircle, FaShoppingCart, FaTimesCircle } from 'react-icons/fa';

const ToastNotification = () => {
    const notification = useSelector(state => state.cart.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                dispatch(hideNotification());
            }, 3000); // 3 seconds
            return () => clearTimeout(timer);
        }
    }, [notification, dispatch]);

    if (!notification) return null;

    const isSuccess = notification.toLowerCase().includes('success') || notification.toLowerCase().includes('added');
    const isError = notification.toLowerCase().includes('invalid') || notification.toLowerCase().includes('error') || notification.toLowerCase().includes('failed');

    return (
        <div style={{
            position: 'fixed',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#0f2e26',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '50px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: '500',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            {isSuccess ? <FaCheckCircle className="text-warning" size={20} /> :
                isError ? <FaTimesCircle className="text-danger" size={20} /> :
                    <FaShoppingCart className="text-warning" size={18} />}
            <span>{notification}</span>
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translate(-50%, -20px); }
                        to { opacity: 1; transform: translate(-50%, 0); }
                    }
                `}
            </style>
        </div>
    );
};

export default ToastNotification;
