import React from 'react'
const Top = "http://localhost:5000/images/top-shop.jpg"

import { Link } from 'react-router-dom'

const TopShop = ({ title = "SHOP", pageName = "SHOP" }) => {
    return (
        <div className='position-relative' data-aos="fade-up">
            <img src={Top} alt="" className='w-100 img-fluid' />
            <div className='position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-2'>
                <h3 className='fw-bold text-black mb-0'>{title}</h3>
                <div className='d-flex align-items-center gap-2'>
                    <Link to="/" className='mb-0 fw-medium text-black text-decoration-none'>HOME</Link>
                    <div className='bg-black rounded-circle' style={{ width: '5px', height: '5px' }}></div>
                    <p className='mb-0 fw-medium text-black'>{pageName}</p>
                </div>
            </div>
        </div>
    )
}

export default TopShop