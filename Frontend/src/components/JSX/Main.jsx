import React from 'react'
const Main2 = "http://localhost:5000/images/main.jpg"

const Main = () => {
    return (
        <div className='container-fluid px-0 mt-5 overflow-hidden'>
            <div className='hotspot-container' style={{ marginTop: '-180px' }}>
                <img src={Main2} alt="" className='img-fluid w-100' />

                {/* Plants Hotspot */}
                <div className='hotspot-dot' style={{ top: '30%', left: '15%' }}>
                    <div className='hotspot-tooltip'>Lush Green Plants</div>
                </div>

                {/* Sofa Hotspot */}
                <div className='hotspot-dot' style={{ top: '60%', right: '25%' }}>
                    <div className='hotspot-tooltip'>Comfortable Grey Sofa</div>
                </div>

                {/* Table Hotspot */}
                <div className='hotspot-dot' style={{ bottom: '20%', left: '45%' }}>
                    <div className='hotspot-tooltip'>Modern Coffee Table</div>
                </div>
            </div>
        </div>
    )
}

export default Main