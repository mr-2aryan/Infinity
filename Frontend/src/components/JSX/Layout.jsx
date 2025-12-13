import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbr from './Navbr'
import Footer from './Footer'
import CartSidebar from './CartSidebar'

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbr key={location.pathname} />
            <CartSidebar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
