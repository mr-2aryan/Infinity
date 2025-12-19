import React from 'react'
import TopShop from '../components/JSX/TopShop'
import ShopProducts from '../components/JSX/ShopProducts'
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    return (
        <>
            <Helmet key="shop">
                <title>Shop</title>
                <meta name="description" content="Browse our exclusive collection of high-quality furniture." />
            </Helmet>
            <TopShop />
            <ShopProducts />
        </>
    )
}

export default Shop