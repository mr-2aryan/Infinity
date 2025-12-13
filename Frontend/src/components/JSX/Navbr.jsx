import React, { useState, useEffect, useMemo } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { BiInfinite } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { openCart } from '../../redux/cartSlice';
import '../CSS/styles.css'

const Navbr = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch all products on mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products for search:', error);
            }
        };
        fetchProducts();
    }, []);

    // Filter products when search term changes
    const searchResults = useMemo(() => {
        if (searchTerm.trim() === '') return [];
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, products]);

    const handleProductClick = (id) => {
        navigate(`/view/${id}`);
        setShowSearch(false);
        setSearchTerm('');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark primary-color-bg py-3 shadow sticky-top" data-aos="fade-down">
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
                        <div className={`search-input-wrapper position-relative d-flex align-items-center ${showSearch ? 'show' : ''}`}>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {/* Search Results Dropdown */}
                            {searchResults.length > 0 && showSearch && (
                                <div className="position-absolute w-100 bg-white shadow rounded start-0" style={{ top: '100%', zIndex: 1000, maxHeight: '300px', overflowY: 'auto' }}>
                                    {searchResults.map(product => (
                                        <div
                                            key={product.id}
                                            className="d-flex align-items-center p-2 border-bottom pointer custom-dropdown-item"
                                            onClick={() => handleProductClick(product.id)}
                                        >
                                            <img src={product.img1} alt={product.name} style={{ width: '40px', height: '40px', objectFit: 'cover' }} className="rounded me-2" />
                                            <div>
                                                <p className="mb-0 fs-7 fw-semibold text-dark">{product.name}</p>
                                                <small className="text-muted">{product.price}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="icon-link pointer text-white" onClick={() => {
                            setShowSearch(!showSearch);
                            if (showSearch) setSearchTerm(''); // Clear on close
                        }}>
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
