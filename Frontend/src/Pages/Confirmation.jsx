import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TopShop from '../components/JSX/TopShop';
import { FaCheckCircle } from 'react-icons/fa';

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <>
            <TopShop title="ORDER CONFIRMED" pageName="CONFIRMATION" />
            <Container className="my-5 py-5 text-center">
                <div className="mb-4 text-success">
                    <FaCheckCircle size={80} />
                </div>
                <h2 className="fw-bold mb-3">Thank You For Your Order!</h2>
                <p className="lead text-muted mb-4">
                    Your order has been placed successfully. We've sent a confirmation email to your inbox.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <Button variant="dark" className="px-4 py-2 rounded-0" onClick={() => navigate('/shop')}>
                        Continue Shopping
                    </Button>
                    <Button variant="outline-dark" className="px-4 py-2 rounded-0" onClick={() => navigate('/')}>
                        Back to Home
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default Confirmation;
