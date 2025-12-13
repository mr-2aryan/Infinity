import React from 'react'
const Green = "http://localhost:5000/images/green_sofa.jpg"
const Green2 = "http://localhost:5000/images/green2.webp"

const HomePictures = () => {
    return (
        <div className='container py-lg-5'>
            <div className='row'>
                <div className='col-lg-6 mb-4 mb-lg-0'>
                    <div className='hp-img-box'>
                        <img src={Green} alt="green_sofa" className='img-fluid rounded' />
                        <div className='hp-overlay'>
                            <p className='fs-5 mb-1'>New Arrival</p>
                            <h3 className='fw-bold'>Green Sofa</h3>
                            <p className='fs-7 mb-0'>Experience comfort like never before.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='hp-img-box'>
                        <img src={Green2} alt="green_sofa" className='img-fluid rounded' width={"98%"} />
                        <div className='hp-overlay'>
                            <p className='fs-5 mb-1'>Best Seller</p>
                            <h3 className='fw-bold'>Modern Chair</h3>
                            <p className='fs-7 mb-0'>Stylish seating for your modern home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePictures