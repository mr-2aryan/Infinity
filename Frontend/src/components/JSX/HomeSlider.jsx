import React, { useState, useEffect } from 'react'
const slider1 = "http://localhost:5000/images/homeslider1.jpg"
const slider2 = "http://localhost:5000/images/homeslider2.jpg"
const slider3 = "http://localhost:5000/images/homeslider3.jpg"
import "../CSS/styles.css"

const HomeSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: slider1, text: <>Timeless Elegance <br /> Just For You</> },
        { image: slider2, text: <>Timeless Elegance <br /> Just For You</> },
        { image: slider3, text: <>Timeless Elegance <br /> Just For You</> }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className='position-relative w-100 slider-container' data-aos="fade-up">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`position-absolute w-100 h-100 slider-image-wrapper ${index === currentSlide ? 'active' : ''}`}
                    style={{ opacity: index === currentSlide ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                >
                    <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className='w-100 h-100 object-fit-cover'
                        style={{ objectPosition: 'bottom' }}
                        fetchpriority={index === 0 ? "high" : "low"}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>
            ))}

            <div className='position-absolute bottom-0 w-100 px-5 pb-4'>
                <div className='row align-items-end'>
                    <div className='col-lg-5 text-white mb-3 mb-lg-0'>
                        <h4 className='display-4 fw-bold'>{slides[currentSlide].text}</h4>
                    </div>
                </div>

                <div className='position-absolute start-50 translate-middle-x d-flex align-items-center gap-3 pb-4' style={{ bottom: '0', zIndex: 10 }}>
                    <button onClick={prevSlide} className='btn p-2 text-white slider-nav-btn d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" /></svg>
                    </button>

                    <div className='d-flex align-items-center mx-2 text-white' style={{ minWidth: '300px' }}>
                        <span className='fw-bold fs-5'>0{currentSlide + 1}</span>
                        <div className='flex-grow-1 mx-3 bg-white bg-opacity-25' style={{ height: '4px' }}>
                            <div
                                className='secondary-color-bg h-100'
                                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%`, transition: 'width 0.4s ease-in-out' }}
                            ></div>
                        </div>
                        <span className='fw-bold fs-5'>0{slides.length}</span>
                    </div>

                    <button onClick={nextSlide} className='btn p-2 text-white slider-nav-btn d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider