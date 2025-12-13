import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopShop from '../components/JSX/TopShop';
import LoadingOverlay from '../components/JSX/LoadingOverlay';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, totalQuantity } = useSelector(state => state.cart);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: ''
    });
    const [loading, setLoading] = useState(false);

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const orderData = {
                customer: formData,
                items: items,
                total: calculateTotal(),
                orderDate: new Date().toISOString()
            };

            await axios.post('http://localhost:5000/api/send-confirmation', orderData);

            // Order successful
            dispatch(clearCart());
            navigate('/confirmation');
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return (
            <>
                <TopShop title="CHECKOUT" pageName="CHECKOUT" />
                <Container className="my-5 py-5 text-center">
                    <h2>Your cart is empty</h2>
                    <Button variant="dark" className="mt-3 rounded-0" onClick={() => navigate('/shop')}>
                        Continue Shopping
                    </Button>
                </Container>
            </>
        );
    }

    return (
        <>
            <TopShop title="CHECKOUT" pageName="CHECKOUT" />
            {loading && <LoadingOverlay />}
            <Container className="my-5 py-5">
                <Row className="g-4">
                    {/* Billing Information */}
                    <Col lg={7}>
                        <Card className="border-0 shadow-sm p-4">
                            <h3 className="fw-bold mb-4">Billing Information</h3>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>First Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Last Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Email Address *</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Phone Number *</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Street Address *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        className="rounded-0"
                                    />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>City *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label>ZIP Code *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label>Country *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className="rounded-0"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button
                                    type="submit"
                                    variant="dark"
                                    className="w-100 py-3 mt-3 rounded-0 fw-bold text-uppercase"
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Place Order'}
                                </Button>
                            </Form>
                        </Card>
                    </Col>

                    {/* Order Summary */}
                    <Col lg={5}>
                        <Card className="border-0 shadow-sm p-4 sticky-top" style={{ top: '100px' }}>
                            <h3 className="fw-bold mb-4">Order Summary</h3>
                            <div className="mb-3">
                                {items.map(item => (
                                    <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                        <img
                                            src={item.img1}
                                            alt={item.name}
                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                            className="rounded me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{item.name}</h6>
                                            <small className="text-muted">Qty: {item.quantity}</small>
                                        </div>
                                        <span className="fw-bold">${item.totalPrice.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-top pt-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal ({totalQuantity} items)</span>
                                    <span>${calculateTotal()}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Shipping</span>
                                    <span className="text-success">FREE</span>
                                </div>
                                <div className="d-flex justify-content-between fw-bold fs-5 mt-3 pt-3 border-top">
                                    <span>Total</span>
                                    <span>${calculateTotal()}</span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Checkout;
