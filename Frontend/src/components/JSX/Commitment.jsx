import React from 'react'
const Sofa = "http://localhost:5000/images/sofa-seat.webp"
const Thumb = "http://localhost:5000/images/thumbs-up.svg"
const Arrow = "http://localhost:5000/images/arrow.svg"
const Security = "http://localhost:5000/images/security.svg"
const Graph = "http://localhost:5000/images/graph.svg"
const Headphone = "http://localhost:5000/images/headphone.svg"

const Commitment = () => {
    return (
        <div className='container py-lg-5 py-4'>
            <div className='row align-items-center py-lg-5'>
                <div className='col-lg-6 col-12'>
                    <img src={Sofa} alt="" className='img-fluid' />
                </div>
                <div className='col-lg-6 col-12'>
                    <p className='text-uppercase fw-medium'>Why choose us</p>
                    <h4 className='mt-2 fw-semibold text-uppercase'>Your Home, Our Commitment to Excellence</h4>
                    <p className='mt-2 fs-7'>With thousands of satisfied customers, Minicom is a trusted name in quality furniture. Our thoughtfully designed pieces bring comfort, style, and functionality to every home. Experience the difference today!</p>
                    <div className='row align-items-center mt-4'>
                        <div className='col-6'>
                            <div className='d-flex align-items-center'>
                                <div className='feature-icon-box'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" /></svg>
                                </div>
                                <p className='ms-4 fw-semibold mb-0'>Fast & Reliable Delivery</p>
                            </div>
                            <div className='d-flex align-items-center mt-4'>
                                <div className='feature-icon-box'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 64 48">
                                        <path d="
    M16 22
    Q16 12 32 12
    Q48 12 48 22
    L48 30
    Q48 33 45 33
    L19 33
    Q16 33 16 30
    Z
  " fill="#000" />

                                        <rect x="20" y="33" width="3" height="5" rx="1.5" fill="#000" />
                                        <rect x="41" y="33" width="3" height="5" rx="1.5" fill="#000" />
                                    </svg>
                                </div>
                                <p className='ms-4 fw-semibold mb-0'>Stylish & Functional Designs</p>
                            </div>
                            <div className='d-flex align-items-center mt-4'>
                                <div className='feature-icon-box'>
                                    <img src={Thumb} alt="" className='img-fluid' width="40%" />
                                </div>
                                <p className='ms-4 fw-semibold mb-0'>Stylish & Functional Designs</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex align-items-center'>
                                <div className='feature-icon-box'>
                                    <img src={Arrow} alt="" className='img-fluid' width="40%" />
                                </div>
                                <p className='ms-4 fw-semibold mb-0'>Easy Returns</p>
                            </div>
                            <div className='d-flex align-items-center mt-4'>
                                <div className='feature-icon-box'>
                                    <img src={Security} alt="" className='img-fluid' width="40%" />
                                </div>
                                <p className='ms-4 fw-semibold mb-0'>Secure Payments</p>
                            </div>
                            <div className='d-flex align-items-center mt-4'>
                                <div className='feature-icon-box'>
                                    <img src={Graph} alt="" className='img-fluid' width="40%" />
                                </div>
                                <p className='ms-4 fw-semibold mb-0'>Best Value for Money</p>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-4' />
                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <img src={Headphone} alt="" className='img-fluid' width="8%" />
                        <div className='ms-4'>
                            <p className='fw-semibold mb-0'>Call Us Now +123-456-789</p>
                            <p className='fs-7 mb-0'>We are available 24/7 to assist you with any inquiries or concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commitment