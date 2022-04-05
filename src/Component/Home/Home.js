import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import CustromerReview from '../CustomerReview/CustromerReview';


const Home = () => {
    const [products,setProducts] = useProducts()
    const pro = products.slice(0,3)
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6  align-self-center'>
                    <div>
                        <h1 className='text-info fw-bold'>Find Your Desire Gadgets</h1>
                        <h5>Find The Best Solution To Get The Review Of All Products. Here You can see all the authentic review of your customer. If you have any dout you can directly contact our customer through this link.</h5>
                        <button onClick={()=>{navigate('/about')}} className='btn btn-info fw-bold'>Live Contact</button>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <img src="./img/laptop.jpg" style={{width:'600px'}} alt="" />
                </div>
            </div>
            <h1 className='text-center text-info fw-bold m-3'>Customer Review ({pro.length})</h1>
            <div className='d-flex flex-wrap'>
            {
                pro.map(product =><CustromerReview key={product.id} product={product}></CustromerReview>)
            }
            </div>
            <div className='d-flex justify-content-center m-5'>
                <button onClick={()=>{navigate('/review')}} className='btn btn-info fw-bold'>Show All Review</button>
            </div>

        </div>
    );
};

export default Home;
