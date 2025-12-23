import React, { useState } from 'react';

const ZoomableImage = ({ src, alt, className }) => {
    const [zoomProps, setZoomProps] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomProps({ x, y });
    };

    return (
        <div
            className={`zoom-container ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'crosshair'
            }}
        >
            <img
                src={src}
                alt={alt}
                className={`img-fluid w-100 ${isHovered ? 'invisible' : 'visible'}`}
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    opacity: isHovered ? 0 : 1
                }}
            />
            {isHovered && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `${zoomProps.x}% ${zoomProps.y}%`,
                        backgroundSize: '200%',
                        backgroundRepeat: 'no-repeat',
                        pointerEvents: 'none'
                    }}
                />
            )}
        </div>
    );
};

export default ZoomableImage;
