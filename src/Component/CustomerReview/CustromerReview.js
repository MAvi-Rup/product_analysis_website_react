import React from 'react';

const CustromerReview = (props) => {
    const {name,review,device,rating,img} = props.product
    return (
        <div className="card-group m-4 w-25">
            <div className="card">
                <img style={{width:'200px', borderRadius:'50%'}} src={img} className="ms-5 mt-3" alt="Text"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <span className='fw-bold'> Device Name: </span>{device}</p>
                        <p className="card-text"> <span className='fw-bold'> Review: </span>{review}</p>
                        <p className="card-text"> <span className='fw-bold'> Ratings: </span>{rating}</p>
                        {/* <button onClick={()=>props.eventHandler(props.product)} className='btn btn-success'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button> */}
                </div>
            </div>
        </div>
    );
};

export default CustromerReview;