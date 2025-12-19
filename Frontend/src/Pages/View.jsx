import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaBug } from "react-icons/fa";
import ProductDetail from '../components/JSX/ProductDetail'
import SingleProduct from '../components/JSX/SingleProduct'
import TopShop from '../components/JSX/TopShop'
import ErrorOverlay from '../components/JSX/ErrorOverlay';
import { Helmet } from 'react-helmet-async';

const View = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products');
                const allProducts = res.data;
                const foundProduct = allProducts.find(p => p.id === parseInt(id));
                setProduct(foundProduct);

                // Filter out current product for standard Related Products
                const related = allProducts.filter(p => p.id !== parseInt(id)).slice(0, 4);
                setRelatedProducts(related);
            } catch (err) {
                console.log(err);
                setError("Failed to load product. Please ensure the backend server is running.");
            }
        }
        fetchProduct();
        // Scroll to top when view changes
        window.scrollTo(0, 0);
    }, [id])

    if (error) return <ErrorOverlay />;
    if (!product) return <div className="text-center py-5">Loading...</div>

    return (
        <div>
            <Helmet>
                <title>{`Infinity | ${product.name}`}</title>
                <meta name="description" content={`Buy ${product.name} at Infinity.`} />
            </Helmet>
            <TopShop title="PRODUCT VIEW" pageName="VIEW" />

            <ProductDetail
                id={product.id}
                img1={product.img1}
                img2={product.img2}
                name={product.name}
                price={product.price}
                originalPrice={product.original_price}
                discount={product.discount}
            />

            <div className="container mt-5">
                <hr />
                <h3 className="fw-bold my-4 text-center">Related Products</h3>
                <div className="row g-4 mb-5">
                    {relatedProducts.map((item, index) => (
                        <SingleProduct
                            key={index}
                            id={item.id}
                            img1={item.img1}
                            img2={item.img2}
                            name={item.name}
                            price={item.price}
                            discount={item.discount}
                            originalPrice={item.original_price}
                            colClass="col-lg-3 col-12"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default View
