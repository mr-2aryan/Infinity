import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../../redux/cartSlice';

const ToastNotification = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.cart.notification);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                dispatch(hideNotification());
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [notification, dispatch]);

    if (!notification) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '100px', // Moved down to avoid navbar
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#0f2e26', // Updated to verified primary color
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '50px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '500',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {notification}
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
