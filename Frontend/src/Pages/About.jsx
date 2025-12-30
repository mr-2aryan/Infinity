import React, { useState, useEffect } from 'react'
import TopShop from '../components/JSX/TopShop'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { FaUserFriends, FaTrophy, FaSmile } from 'react-icons/fa';

// Simple Counter Component
const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(percentage * end));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
}

const About = () => {
    return (
        <>
            <Helmet key="about">
                <title>About Us</title>
                <meta name="description" content="Learn about our story, mission, and commitment to sustainable design." />
            </Helmet>
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

                {/* Animated Stats Section - NEW */}
                <div className="primary-color-bg text-white rounded p-5 mb-5">
                    <Row className="text-center g-4">
                        <Col md={4} className="border-end border-secondary">
                            <h1 className="fw-bold text-warning display-4"><Counter end={5000} />+</h1>
                            <p className="mb-0 text-uppercase letter-spacing-2">Happy Clients</p>
                        </Col>
                        <Col md={4} className="border-end border-secondary">
                            <h1 className="fw-bold text-warning display-4"><Counter end={120} /></h1>
                            <p className="mb-0 text-uppercase letter-spacing-2">Awards Won</p>
                        </Col>
                        <Col md={4}>
                            <h1 className="fw-bold text-warning display-4"><Counter end={15} /></h1>
                            <p className="mb-0 text-uppercase letter-spacing-2">Years Experience</p>
                        </Col>
                    </Row>
                </div>

                {/* Our Mission Section */}
                <div className="bg-light p-5 rounded-3 mb-5 text-center">
                    <h2 className="fw-bold mb-3">Our Mission</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                        "To inspire and create beautiful living spaces with furniture that blends form, function, and sustainability, accessible to everyone."
                    </p>
                </div>

                {/* Team Section - NEW */}
                <div className="mb-5 text-center">
                    <h2 className="fw-bold mb-5">Meet Our Team</h2>
                    <Row className="g-4">
                        {[
                            { name: "John Deo", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/1.jpg" },
                            { name: "Sarah Smith", role: "Head of Design", img: "https://randomuser.me/api/portraits/women/2.jpg" },
                            { name: "Mike Ross", role: "Marketing Director", img: "https://randomuser.me/api/portraits/men/3.jpg" },
                            { name: "Emily Blunt", role: "Lead Architect", img: "https://randomuser.me/api/portraits/women/4.jpg" }
                        ].map((member, idx) => (
                            <Col md={3} sm={6} key={idx}>
                                <div className="team-card position-relative overflow-hidden rounded shadow-sm">
                                    <img src={member.img} alt={member.name} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} />
                                    <div className="team-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                        <h5 className="fw-bold mb-0">{member.name}</h5>
                                        <small className="text-warning">{member.role}</small>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
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

                {/* Our Process Section */}
                <div className="mb-5 py-5">
                    <Row className="flex-lg-row-reverse align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <img
                                src="http://localhost:5000/images/homeslider3.jpg"
                                alt="Our Process"
                                className="img-fluid rounded shadow-sm"
                                style={{ objectFit: 'cover', height: '400px', width: '100%' }}
                            />
                        </Col>
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">Craftsmanship Process</h2>
                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>1</div>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Design & Sketching</h5>
                                    <p className="text-muted">Every piece starts as an idea. Our designers painstakingly sketch prototypes to ensure perfect proportions.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>2</div>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Material Selection</h5>
                                    <p className="text-muted">We travel globally to ethically source hardwoods, premium fabrics, and sustainable components.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>3</div>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Handcrafted Assembly</h5>
                                    <p className="text-muted">Master artisans assemble each piece by hand, ensuring a level of detail machines simply can't match.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Testimonials Section */}
                <div className="bg-light p-5 rounded-3 mb-5">
                    <h2 className="fw-bold text-center mb-5">What Our Clients Say</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="h-100 border-0 p-4">
                                <Card.Body>
                                    <div className="mb-3 text-warning">★★★★★</div>
                                    <p className="card-text text-muted fst-italic">"The quality of the furniture is absolutely stunning. It completely transformed my living room. Customer support was incredibly helpful throughout the process."</p>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="bg-secondary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                                        <div className="ms-3">
                                            <h6 className="fw-bold mb-0">Sarah Jenkins</h6>
                                            <small className="text-muted">Interior Designer</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 border-0 p-4">
                                <Card.Body>
                                    <div className="mb-3 text-warning">★★★★★</div>
                                    <p className="card-text text-muted fst-italic">"I was hesitant to buy furniture online, but Infinity surpassed all expectations. The delivery was fast, and the packaging ensured everything arrived perfectly."</p>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="bg-secondary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                                        <div className="ms-3">
                                            <h6 className="fw-bold mb-0">Michael Chen</h6>
                                            <small className="text-muted">Architect</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* FAQ Section */}
                <div className="mb-5">
                    <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Do you offer international shipping?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body text-muted">
                                            Yes, we ship to over 50 countries worldwide. Shipping costs and times vary depending on the destination.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            What is your return policy?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body text-muted">
                                            We offer a 30-day return policy for all items in their original condition. Please verify the dimensions before placing an order.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            Do you offer warranty on your products?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body text-muted">
                                            Yes, all our furniture comes with a 1-year manufacturing warranty covering structural defects.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default About
