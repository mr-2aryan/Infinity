import React from 'react'
import HomeSlider from '../components/JSX/HomeSlider'
import Eco from '../components/JSX/Eco'
import Commitment from '../components/JSX/Commitment'
import Products from '../components/JSX/Products'
import Hover from '../components/JSX/Hover'
import Steps from '../components/JSX/Steps'
import HomePictures from '../components/JSX/HomePictures'
import FeaturedProduct from '../components/JSX/FeaturedProduct'
import Main from '../components/JSX/Main'
import Accordions from '../components/JSX/Accordions'

const Home = () => {
    return (
        <>
            <HomeSlider />
            <Eco />
            <Commitment />
            <Products />
            <Hover />
            <Steps />
            <HomePictures />
            <FeaturedProduct />
            <Main />
            <Accordions />
        </>
    )
}

export default Home