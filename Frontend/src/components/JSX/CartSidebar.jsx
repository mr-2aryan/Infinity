import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeCart, removeFromCart, clearCart } from '../../redux/cartSlice';
import { FaShoppingCart, FaTrash, FaTimes } from 'react-icons/fa';

const CartSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, showCart, totalQuantity } = useSelector(state => state.cart);

    const handleClose = () => dispatch(closeCart());

    const calculateSubtotal = () => {
        return items.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
    };

    return (
        <>

            <Offcanvas show={showCart} onHide={handleClose} placement="end" className="cart-sidebar">
                <Offcanvas.Header className="border-bottom">
                    <div className="d-flex align-items-center gap-2">
                        <FaShoppingCart size={20} />
                        <Offcanvas.Title className="fw-bold">My Cart ({totalQuantity})</Offcanvas.Title>
                    </div>
                    <button className="btn p-0 border-0" onClick={handleClose}>
                        <FaTimes size={20} />
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column">
                    {items.length === 0 ? (
                        <div className="text-center my-auto">
                            <p className="text-muted fs-5">Your cart is empty.</p>
                            <Button variant="dark" className="rounded-0 mt-3" onClick={handleClose}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex-grow-1 overflow-auto">
                                {items.map(item => (
                                    <div key={item.id} className="d-flex align-items-center py-3 border-bottom">
                                        <div style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                                            <img
                                                src={item.img1}
                                                alt={item.name}
                                                className="w-100 h-100 object-fit-cover rounded"
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1 fw-bold text-truncate" style={{ maxWidth: '150px' }}>{item.name}</h6>
                                            <p className="mb-0 text-muted small">{item.quantity} x {item.price}</p>
                                            <p className="mb-0 fw-semibold text-success">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <button
                                            className="btn btn-link text-danger p-0 ms-2"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            <FaTrash size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="border-top pt-3 mt-auto">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="fw-bold">Subtotal:</span>
                                    <span className="fw-bold fs-5">${calculateSubtotal()}</span>
                                </div>
                                <Button
                                    variant="outline-danger"
                                    className="w-100 py-2 mb-2 rounded-0 fw-bold text-uppercase"
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Clear Cart
                                </Button>
                                <Button variant="dark" className="w-100 py-3 rounded-0 fw-bold checkout-btn text-uppercase" onClick={() => { handleClose(); navigate('/checkout'); }}>
                                    Checkout
                                </Button>
                            </div>
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CartSidebar;
