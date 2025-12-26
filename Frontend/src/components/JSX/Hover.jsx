import React from 'react'
const Bed = "http://localhost:5000/images/bed.jpg"
const Chair = "http://localhost:5000/images/chair.jpg"
const Desk = "http://localhost:5000/images/desk.webp"
import '../CSS/hover_styles.css'

const Hover = () => {
    return (
        <div className='container mt-5'>
            <div className='row pt-lg-5'>
                <div className='col-lg-4 col-12 bor'>
                    <img src={Bed} alt="Bed" className='img-fluid rounded' />
                    <div className='bor-overlay'>
                        <p className='fw-medium'>Serenity in Simplicity</p>
                        <h3>Scandinavian Bedroom</h3>
                        <img src={Bed} alt="Bed" className='mb-4 rounded mt-4' style={{ height: '250px', width: 'auto' }} />
                        <p className='fw-medium text-center mb-0 fs-7'>Create a peaceful and stylish retreat with a Scandinavian Bedroom.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-12 bor'>
                    <img src={Chair} alt="Bed" className='img-fluid rounded' />
                    <div className='bor-overlay'>
                        <p className='fw-medium'>Comfort & Style Combined</p>
                        <h3>Cozy Blanket Chair</h3>
                        <img src={Chair} alt="Chair" className='mb-4 mt-4 rounded' style={{ height: '250px', width: 'auto' }} />
                        <p className='fw-medium text-center mb-0 fs-7'>Experience ultimate comfort with our Cozy <br /> Blanket Chair—a perfect blend of softness <br /> and support.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-12 bor'>
                    <img src={Desk} alt="Bed" className='img-fluid rounded' />
                    <div className='bor-overlay'>
                        <p className='fw-medium'>Perfect for Every Space</p>
                        <h3>Elegant Round Coffee Table</h3>
                        <img src={Desk} alt="Desk" className='mb-4 mt-4 rounded' style={{ height: '250px', width: 'auto' }} />
                        <p className='fw-medium text-center mb-0 fs-7'>Add a touch of sophistication to your living room <br /> with this elegant round coffee table</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hover