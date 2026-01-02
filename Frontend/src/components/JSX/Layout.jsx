import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbr from './Navbr'
import Footer from './Footer'
import CartSidebar from './CartSidebar'
import { FaWhatsapp } from 'react-icons/fa'

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbr key={location.pathname} />
            <CartSidebar />
            <a
                href="https://wa.me/923005246223"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    zIndex: 9999,
                    transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <FaWhatsapp size={35} />
            </a>

            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
