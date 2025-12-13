import React, { useEffect, useState } from 'react'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThLarge, FaList } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import SingleProduct from './SingleProduct';
import axios from 'axios';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]); // Store original order
    const [colClass, setColClass] = useState('col-lg-3 col-12');
    const [activeView, setActiveView] = useState(1);
    const [sortOption, setSortOption] = useState("Sort by Popularity");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products');
                setProducts(res.data);
                setOriginalProducts(res.data); // Save original data
            } catch (err) {
                console.log(err);
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
        let sortedProducts = [...products];

        if (option === "Sort by Price High To Low") {
            sortedProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceB - priceA;
            });
            setProducts(sortedProducts);
        } else if (option === "Sort BY price low To High") {
            sortedProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceA - priceB;
            });
            setProducts(sortedProducts);
        } else {
            // "Sort by Popularity" or "Featured" - reset to original
            setProducts([...originalProducts]);
        }
    }

    return (
        <div className='container mt-5'>
            <div className='row py-5 align-items-center'>
                <div className='col-lg-6 col-12'>
                    <div className='d-flex gap-3'>
                        <div className={`view-icon ${activeView === 1 ? 'active' : ''}`} onClick={() => handleViewChange(1, 'col-lg-3 col-12')}>
                            <BsGrid3X3GapFill size={20} />
                        </div>
                        <div className={`view-icon ${activeView === 2 ? 'active' : ''}`} onClick={() => handleViewChange(2, 'col-lg-4 col-12')}>
                            <FaThLarge size={20} />
                        </div>
                        <div className={`view-icon ${activeView === 3 ? 'active' : ''}`} onClick={() => handleViewChange(3, 'col-lg-6 col-12')}>
                            <FaList size={20} />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12 d-flex justify-content-end'>
                    <Dropdown className='w-50'>
                        <Dropdown.Toggle className='w-100 rounded-0 border-dark d-flex justify-content-between align-items-center shadow-none focus-ring-none bg-white text-dark sort-toggle' id="dropdown-basic">
                            {sortOption}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='w-100 rounded-0 border-dark custom-dropdown-animation'>
                            <Dropdown.Item onClick={() => handleSort("Sort by Popularity")} className='custom-dropdown-item'>Sort by Popularity</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("Sort by Price High To Low")} className='custom-dropdown-item'>Sort by Price High To Low</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("Sort BY price low To High")} className='custom-dropdown-item'>Sort by price low To High</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("Sort by Featured Products")} className='custom-dropdown-item'>Sort by Featured Products</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='row g-4 mb-5'>
                {products.map((item, index) => (
                    <SingleProduct key={index} id={item.id} img1={item.img1} img2={item.img2} name={item.name} price={item.price} discount={item.discount} originalPrice={item.original_price} colClass={colClass} />
                ))}
            </div>
        </div>
    )
}

export default ShopProducts