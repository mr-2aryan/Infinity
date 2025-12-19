import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';

            const fetchProducts = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/products');
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching search products:', error);
                }
            };
            fetchProducts();

        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleClose = () => {
        setSearchTerm('');
        onClose();
    };

    const filteredResults = useMemo(() => {
        if (searchTerm.trim() === '') return [];
        return products.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, products]);

    const handleResultClick = (id) => {
        navigate(`/view/${id}`);
        handleClose();
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="search-overlay-container">
            <div className="search-overlay-backdrop" onClick={handleClose}></div>
            <div className="search-overlay-content">
                <button className="search-close-btn" onClick={handleClose}>
                    <FaTimes size={30} />
                </button>

                <div className="container">
                    <div className="search-input-section">
                        <div className="search-input-group">
                            <FaSearch className="search-icon-large" />
                            <input
                                ref={inputRef}
                                type="text"
                                className="search-fullscreen-input"
                                placeholder="What are you looking for?"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="search-results-section">
                        {filteredResults.length > 0 ? (
                            <div className="row g-4 mt-4">
                                {filteredResults.slice(0, 8).map(product => (
                                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="search-result-card" onClick={() => handleResultClick(product.id)}>
                                            <div className="search-result-img-wrapper">
                                                <img src={product.img1} alt={product.name} />
                                            </div>
                                            <div className="search-result-info">
                                                <h6>{product.name}</h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : searchTerm && (
                            <div className="text-center text-white mt-5">
                                <h4>No products found for "{searchTerm}"</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SearchOverlay;
