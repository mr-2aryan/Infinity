import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Accordions = () => {
    return (
        <div className='lgB container-fluid py-lg-5 py-4'>
            <div className='row py-lg-5'>
                <div className='col-12 py-lg-5 text-center justify-content-center'>
                    <h3 className='fw-bold text-uppercase'>FREQUENTLY ASKED QUESTIONS</h3>
                    <p>Common Questions Answered for a Better Understanding</p>
                    <div className='col-lg-6 col-12 mx-auto mt-5'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className='mb-3 border-0 shadow-sm'>
                                <Accordion.Header><span className='fw-bold fs-7'>WHAT SHIPPING METHODS ARE AVAILBALE?</span></Accordion.Header>
                                <Accordion.Body className='text-start text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra cursus eleifend. Maecenas sit amet libero nibh. Donec blandit arcu pharetra, venenatis mi quis, maximus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='mb-3 border-0 shadow-sm'>
                                <Accordion.Header><span className='fw-bold fs-7'>DO YOU SHIP INTERNATIONALLY?</span></Accordion.Header>
                                <Accordion.Body className='text-start text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra cursus eleifend. Maecenas sit amet libero nibh. Donec blandit arcu pharetra, venenatis mi quis, maximus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='mb-3 border-0 shadow-sm'>
                                <Accordion.Header><span className='fw-bold fs-7'>HOW LONG WILL IT TAKE TO GET MY PACKAGE?</span></Accordion.Header>
                                <Accordion.Body className='text-start text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra cursus eleifend. Maecenas sit amet libero nibh. Donec blandit arcu pharetra, venenatis mi quis, maximus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='mb-3 border-0 shadow-sm'>
                                <Accordion.Header><span className='fw-bold fs-7'>WHY CAN’T I LOG INTO MY ACCOUNT?</span></Accordion.Header>
                                <Accordion.Body className='text-start text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra cursus eleifend. Maecenas sit amet libero nibh. Donec blandit arcu pharetra, venenatis mi quis, maximus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordions