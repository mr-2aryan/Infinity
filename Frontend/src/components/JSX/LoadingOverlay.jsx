import React from 'react';
import { BiInfinite } from "react-icons/bi";

const LoadingOverlay = () => {
    return (
        <div className="loading-overlay">
            <div className="spinner-container d-flex align-items-center justify-content-center">
                {/* Outer ring - spins anticlockwise */}
                <div className="spinner-ring spinner-outer"></div>
                {/* Inner ring - spins clockwise */}
                <div className="spinner-ring spinner-inner"></div>
                {/* Center logo */}
                <div style={{ position: 'absolute' }}>
                    <BiInfinite size={30} color="#0f2e26" />
                </div>
            </div>
            <div className="loading-text">PROCESSING...</div>
        </div>
    );
};

export default LoadingOverlay;
