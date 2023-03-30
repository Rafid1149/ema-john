import React from 'react';
import './Product.css';
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
   const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" srcSet="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}r</p>
                <p>Ratings: {ratings} Star</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};
import './Product.css';
export default Product;