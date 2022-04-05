import React from 'react';
import useProducts from '../../hooks/useProducts';
import CustromerReview from '../CustomerReview/CustromerReview';

const Review = () => {
    const [products,setProducts] = useProducts()
    return (
        <div className='container'>
            <h1 className='text-info'>Here All Our Customer Review</h1>
            <div className='d-flex flex-wrap'>
            {
                products.map(product =><CustromerReview key={product.id} product={product}></CustromerReview>)
            }
            </div>
        </div>
    );
};

export default Review;