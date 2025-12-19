import React, { useState } from 'react'
import axios from 'axios'
import LoadingOverlay from '../components/JSX/LoadingOverlay'
import TopShop from '../components/JSX/TopShop'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { showNotification } from '../redux/cartSlice';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            dispatch(showNotification('Message sent successfully! We will get back to you soon.'));
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Contact error:', error);
            dispatch(showNotification('Failed to send message. Please try again.'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <TopShop title="CONTACT US" pageName="CONTACT" />
            {loading && <LoadingOverlay />}

            <Container className="my-5 py-5">
                <Row className="g-5">
                    {/* Contact Form Section */}
                    <Col lg={7}>
                        <h2 className="fw-bold mb-4">Get In Touch</h2>
                        <p className="text-muted mb-4">
                            Have a question or just want to say hi? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group className="mb-3 mb-md-0" controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="rounded-0 p-3 bg-light border-0"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            className="rounded-0 p-3 bg-light border-0"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="rounded-0 p-3 bg-light border-0"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formGridMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Your Message"
                                    className="rounded-0 p-3 bg-light border-0"
                                    required
                                />
                            </Form.Group>

                            <Button variant="dark" type="submit" className="px-5 py-3 rounded-0 fw-bold submit-btn" disabled={loading}>
                                {loading ? 'SENDING...' : 'SEND MESSAGE'}
                            </Button>
                        </Form>
                    </Col>

                    {/* Contact Info Section */}
                    <Col lg={5}>
                        <div className="bg-light p-5 h-100 rounded-3">
                            <h3 className="fw-bold mb-4">Contact Information</h3>

                            <div className="d-flex align-items-start mb-4">
                                <div className="text-warning me-3 mt-1">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Our Location</h5>
                                    <p className="text-muted mb-0">123 Design Street, Creative City, NY 10012, USA</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <div className="text-warning me-3 mt-1">
                                    <FaPhoneAlt size={24} />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Phone Number</h5>
                                    <p className="text-muted mb-0">+1 (123) 456-7890</p>
                                    <p className="text-muted mb-0">+1 (987) 654-3210</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-5">
                                <div className="text-warning me-3 mt-1">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Email Address</h5>
                                    <p className="text-muted mb-0">hello@infinity.com</p>
                                    <p className="text-muted mb-0">support@infinity.com</p>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="rounded overflow-hidden shadow-sm" style={{ height: '250px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652283084224!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact
