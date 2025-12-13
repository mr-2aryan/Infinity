import React from 'react';
import { BiInfinite } from "react-icons/bi";

const LoadingOverlay = () => {
    return (
        <div className="loading-overlay">
            <div className="spinner-container d-flex align-items-center justify-content-center">
                <div className="custom-spinner"></div>
                <div style={{ position: 'absolute' }}>
                    <BiInfinite size={25} color="#0f2e26" />
                </div>
            </div>
            <div className="loading-text">PROCESSING...</div>
        </div>
    );
};

export default LoadingOverlay;
