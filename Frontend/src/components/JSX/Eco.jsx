import React from 'react'
const Leaf = "http://localhost:5000/images/leaf.svg"
const Pen = "http://localhost:5000/images/pen.svg"
const All = "http://localhost:5000/images/all.svg"
const Bulb = "http://localhost:5000/images/bulb.svg"

const Eco = () => {
    return (
        <div className='container-fluid primary-color-bg px-lg-5 px-3 py-lg-5'>
            <div className='row py-lg-5'>
                <div className='col-lg-3 col-12'>
                    <div className='d-flex align-items-start'>
                        <div>
                            <img src={Leaf} alt="Leaf" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <div className='ms-4'>
                            <p className='text-white fs-5 fw-medium text-uppercase'>Eco-Friendly Materials</p>
                            <p className='text-white fs-7'>We craft our furniture using responsibly sourced, environmentally friendly materials</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-12'>
                    <div className='d-flex align-items-start'>
                        <div>
                            <img src={Pen} alt="Leaf" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <div className='ms-4'>
                            <p className='text-white fs-5 fw-medium text-uppercase'>Eco-Friendly Materials</p>
                            <p className='text-white fs-7'>We craft our furniture using responsibly sourced, environmentally friendly materials</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-12'>
                    <div className='d-flex align-items-start'>
                        <div>
                            <img src={All} alt="Leaf" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <div className='ms-4'>
                            <p className='text-white fs-5 fw-medium text-uppercase'>Giving Back to Nature</p>
                            <p className='text-white fs-7'>Every purchase contributes to reforestation efforts, helping restore green spaces.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-12'>
                    <div className='d-flex align-items-start'>
                        <div>
                            <img src={Bulb} alt="Leaf" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <div className='ms-4'>
                            <p className='text-white fs-5 fw-medium text-uppercase'>Sustainable Production</p>
                            <p className='text-white fs-7'>Dedicated to reducing waste and promoting eco-conscious manufacturing practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eco