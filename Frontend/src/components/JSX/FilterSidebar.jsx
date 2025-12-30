import React, { useState } from 'react';
import '../CSS/styles.css';

const FilterSidebar = ({ categories, onFilterChange, priceRange, setPriceRange }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
        onFilterChange({ categories: updatedCategories, priceRange });
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value);
        setPriceRange(value);
        onFilterChange({ categories: selectedCategories, priceRange: value });
    };

    return (
        <div className="filter-sidebar p-4 bg-light rounded shadow-sm">
            <h4 className="fw-bold mb-4" style={{ color: '#0f2e26' }}>Filter By</h4>

            {/* Categories */}
            <div className="mb-5">
                <h5 className="fw-bold mb-3">Categories</h5>
                <div className="d-flex flex-column gap-2">
                    {categories.map((cat, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={cat}
                                id={`cat-${index}`}
                                onChange={() => handleCategoryChange(cat)}
                                style={{ cursor: 'pointer', borderColor: '#0f2e26' }}
                            />
                            <label className="form-check-label ms-2" htmlFor={`cat-${index}`} style={{ cursor: 'pointer' }}>
                                {cat}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h5 className="fw-bold mb-3">Price Range</h5>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="5000"
                    step="50"
                    value={priceRange}
                    onChange={handlePriceChange}
                    id="priceRange"
                />
                <div className="d-flex justify-content-between mt-2">
                    <span className="fw-bold text-muted">$0</span>
                    <span className="fw-bold" style={{ color: '#fdc402' }}>${priceRange}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
