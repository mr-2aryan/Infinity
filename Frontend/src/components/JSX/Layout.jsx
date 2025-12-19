import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbr from './Navbr'
import Footer from './Footer'
import CartSidebar from './CartSidebar'
import ToastNotification from './ToastNotification'

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbr key={location.pathname} />
            <CartSidebar />
            <ToastNotification />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
