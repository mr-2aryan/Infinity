import React from 'react';
import { FaBug } from "react-icons/fa";

const ErrorOverlay = () => {
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', zIndex: 9999 }}>
            <div className="text-center text-black d-flex flex-column align-items-center gap-3">
                <FaBug size={30} />
                <h5 className='fw-bold'>Due to some bugs the system is currently down</h5>
            </div>
        </div>
    );
};

export default ErrorOverlay;
