import React, { useEffect, useState } from 'react'
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { FaThLarge, FaTh } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import SingleProduct from './SingleProduct';
import FilterSidebar from './FilterSidebar';
import axios from 'axios';
import ErrorOverlay from './ErrorOverlay';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]); // Store original order
    const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered results
    const [colClass, setColClass] = useState('col-lg-4 col-12'); // Default to 3 cols in the 9-col grid
    const [activeView, setActiveView] = useState(2); // Default to middle view
    const [sortOption, setSortOption] = useState("Sort by Popularity");
    const [error, setError] = useState(null);

    // Filter State
    const [priceRange, setPriceRange] = useState(5000);
    const filters = ["Living Room", "Bedroom", "Dining", "Office", "Decor"]; // Mock Categories

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products');
                // Assign random categories for demo purposes since backend might not have them
                const productsWithCats = res.data.map(p => ({
                    ...p,
                    category: filters[Math.floor(Math.random() * filters.length)]
                }));

                setProducts(productsWithCats);
                setOriginalProducts(productsWithCats);
                setFilteredProducts(productsWithCats);
            } catch (err) {
                console.log(err);
                setError("Failed to load products. Please check if the backend is running.");
            }
        }
        fetchProducts();
    }, [])

    const handleViewChange = (id, cols) => {
        setActiveView(id);
        setColClass(cols);
    }

    const handleSort = (option) => {
        setSortOption(option);
        let sorted = [...filteredProducts];

        if (option === "Sort by Price High To Low") {
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceB - priceA;
            });
        } else if (option === "Sort BY price low To High") {
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceA - priceB;
            });
        } else {
            // Re-apply filters to original list to reset sort but keep filters
            // For simplicity, just triggering a re-filter with current state would be ideal, 
            // but here we just reset to "current filtered state" which might be already sorted.
            // A better way is to keep 'filtered' as the source of truth for items matching criteria,
            // and then sort that.
            // For now, let's just re-sort the current filtered list by ID or something stable if needed.
            // Or simpler: just don't sort.
        }
        setFilteredProducts(sorted);
    }

    const handleFilterChange = ({ categories, priceRange }) => {
        let temp = [...originalProducts];

        // Filter by Category
        if (categories.length > 0) {
            temp = temp.filter(p => categories.includes(p.category));
        }

        // Filter by Price
        temp = temp.filter(p => {
            const price = parseFloat(p.price.replace('$', ''));
            return price <= priceRange;
        });

        setFilteredProducts(temp);
    };

    if (error) return <ErrorOverlay />;

    return (
        <div className='container mt-5'>
            <div className='row'>
                {/* Sidebar Column */}
                <div className='col-lg-3 col-12 mb-5'>
                    <FilterSidebar
                        categories={filters}
                        onFilterChange={handleFilterChange}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />
                </div>

                {/* Products Column */}
                <div className='col-lg-9 col-12'>
                    <div className='row pb-4 align-items-center'>
                        <div className='col-lg-6 col-12 mb-3 mb-lg-0'>
                            <div className='d-flex gap-3'>
                                <div className={`view-icon ${activeView === 1 ? 'active' : ''}`} onClick={() => handleViewChange(1, 'col-lg-4 col-12')}>
                                    <TfiLayoutGrid4 size={20} />
                                </div>
                                <div className={`view-icon ${activeView === 2 ? 'active' : ''}`} onClick={() => handleViewChange(2, 'col-lg-6 col-12')}>
                                    <FaTh size={20} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-end'>
                            <Dropdown className='w-100'>
                                <Dropdown.Toggle className='w-100 rounded-0 border-dark d-flex justify-content-between align-items-center shadow-none focus-ring-none bg-white text-dark sort-toggle' id="dropdown-basic">
                                    {sortOption}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-100 rounded-0 border-dark custom-dropdown-animation'>
                                    <Dropdown.Item onClick={() => handleSort("Sort by Popularity")} className='custom-dropdown-item'>Sort by Popularity</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleSort("Sort by Price High To Low")} className='custom-dropdown-item'>Sort by Price High To Low</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleSort("Sort BY price low To High")} className='custom-dropdown-item'>Sort by price low To High</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className='row g-4 mb-5'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item, index) => (
                                <SingleProduct key={index} id={item.id} img1={item.img1} img2={item.img2} name={item.name} price={item.price} discount={item.discount} originalPrice={item.original_price} quantity={item.quantity} colClass={colClass} />
                            ))
                        ) : (
                            <div className="text-center py-5">
                                <h4 className="text-muted">No products found matching your filters.</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopProducts