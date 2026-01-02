import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart, showNotification } from '../../redux/cartSlice';

const SingleProduct = ({ id, img1, img2, name, price, originalPrice, discount, quantity, colClass = "col-lg-3 col-12" }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Check if out of stock
        if (quantity === 0) {
            dispatch(showNotification(`Sorry, ${name} is out of stock!`));
            return;
        }

        const product = {
            id,
            name,
            price,
            img1,
            originalPrice,
            quantity: 1
        };
        dispatch(addToCart(product));
        dispatch(showNotification(`${name} has been added to your cart!`));
    };

    return (
        <div className={colClass} style={{ transition: 'all 0.5s ease' }}>
            <Link to={`/view/${id}`} className="text-decoration-none text-black">
                <div className='image-bg position-relative overflow-hidden product-card'>
                    <img src={img1} alt={name} className='img-fluid product-img-1' loading="lazy" />
                    <img src={img2} alt={name} className='img-fluid product-img-2 position-absolute top-0 start-0 w-100 h-100' style={{ objectFit: 'cover' }} loading="lazy" />
                    <div className='position-absolute top-0 start-0 m-3 px-3 py-1 d-flex align-items-center' style={{ backgroundColor: '#d4ff6e', borderRadius: '50px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px" fill="black"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" /></svg>
                        <span className='ms-0 fw-bold fs-7 text-black'>{discount}</span>
                    </div>
                    <div className='product-icon-box position-absolute bottom-0 end-0 m-3' onClick={handleAddToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 16.5 7 16.5h12v-2H7l1.1-2zM5.12 6h11.93L15.55 13H8.53L5.12 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                    </div>
                </div>
                <p className='fw-medium mt-3 mb-0'>{name}</p>
                <div className='d-flex align-items-center gap-2 mt-2'>
                    <p className='fw-semibold fs-5 mb-0'>{price}</p>
                    <p className='mb-0 fw-medium' style={{ color: 'lightgray', textDecoration: 'line-through', textDecorationColor: 'red' }}>{originalPrice}</p>
                </div>
            </Link>
        </div>
    )
}

export default SingleProduct
