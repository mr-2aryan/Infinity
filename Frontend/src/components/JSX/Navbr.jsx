import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { BiInfinite } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { openCart } from '../../redux/cartSlice';
import '../CSS/styles.css'

import SearchOverlay from './SearchOverlay';

const Navbr = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark primary-color-bg py-3 shadow sticky-top" data-aos="fade-down">
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3 text-white d-flex align-items-center gap-2" to="/">
                    <BiInfinite size={50} />
                    <span>Infinity</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link nlink text-white" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link nlink text-white" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link nlink text-white" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link nlink text-white" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                        <div className="icon-link pointer text-white" onClick={() => setIsSearchOpen(true)}>
                            <FaSearch size={20} className='icon-hover' />
                        </div>
                        <div className="icon-link pointer position-relative text-white me-3" onClick={() => dispatch(openCart())}>
                            <span className='text-white'>
                                <FaShoppingCart size={20} className='icon-hover' />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{ fontSize: '10px' }}>
                                    {totalQuantity}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbr
