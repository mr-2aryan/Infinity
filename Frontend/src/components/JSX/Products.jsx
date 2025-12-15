import React, { useState, useEffect } from 'react'
import SingleProduct from './SingleProduct'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 col-12'>
                    <h2 className='mb-5 fw-semibold'>Gotta Have It</h2>
                </div>
            </div>
            <div className='row g-4'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <SingleProduct
                            key={product.id}
                            id={product.id}
                            img1={product.img1}
                            img2={product.img2}
                            name={product.name}
                            price={product.price}
                            originalPrice={product.original_price}
                            discount={product.discount}
                        />
                    ))
                ) : (
                    <div className='text-center w-100'>
                        <p className='fs-3 fw-bold'>No Products Found Yet</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products