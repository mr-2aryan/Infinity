import React from 'react'
import TopShop from '../components/JSX/TopShop'
import { Container, Row, Col, Card } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <TopShop title="ABOUT US" pageName="ABOUT" />

            <Container className="my-5 py-5">
                {/* Our Story Section */}
                <Row className="align-items-center mb-5">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <img
                            src="http://localhost:5000/images/homeslider2.jpg"
                            alt="Our Story"
                            className="img-fluid rounded shadow-sm"
                            style={{ objectFit: 'cover', height: '400px', width: '100%' }}
                        />
                    </Col>
                    <Col lg={6}>
                        <h2 className="fw-bold mb-4">Our Story</h2>
                        <p className="text-muted fs-5">
                            Infinity was born from a passion for exceptional design and sustainable living. We started as a small workshop in 2010, crafting bespoke furniture pieces that tell a story.
                        </p>
                        <p className="text-muted">
                            Over the years, we've grown into a global brand, but our core values remain the same: quality, craftsmanship, and a commitment to the environment. We believe that your home should be a reflection of your personality, and our collections are curated to help you express yourself through timeless design.
                        </p>
                    </Col>
                </Row>

                {/* Our Mission Section */}
                <div className="bg-light p-5 rounded-3 mb-5 text-center">
                    <h2 className="fw-bold mb-3">Our Mission</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                        "To inspire and create beautiful living spaces with furniture that blends form, function, and sustainability, accessible to everyone."
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="mb-5">
                    <h2 className="fw-bold text-center mb-5">Why Choose Infinity?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm text-center p-4">
                                <div className="mb-3 text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">Premium Quality</Card.Title>
                                    <Card.Text className="text-muted">
                                        We source only the finest materials to ensure durability and style in every piece we create.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm text-center p-4">
                                <div className="mb-3 text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                    </svg>
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">Fast Delivery</Card.Title>
                                    <Card.Text className="text-muted">
                                        Experience swift and secure shipping to your doorstep, anywhere in the world.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm text-center p-4">
                                <div className="mb-3 text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                    </svg>
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">24/7 Support</Card.Title>
                                    <Card.Text className="text-muted">
                                        Our dedicated team is always here to assist you with any questions or concerns.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default About
