import React from 'react';
import './productinfo.scss';  // Make sure to create and style this file
import categoryApi from '../../categoryApi/categoryApi';

export default function ProductInfo() {
    // Assuming categoryApi[1] is the gifting category
    const gifting = categoryApi[1].product;

    // Retrieve the selected product ID from local storage
    const id = JSON.parse(localStorage.getItem('id'));

    return (
        <div className='productInfo'>
            <div className="container">
                <div className="card">
                    {gifting.map((p) => {
                        if (id === p.id) {
                            return (
                                <div className="card-item" key={p.id}>
                                    <div className="card-img-container">
                                        <img className="card-img" src={p.giftImg[0]} alt={p.name} />
                                    </div>
                                    <div className="card-info">
                                        <h1 className='name'>{p.name}</h1>
                                        <h3 className="price"> ₹{p.price} <span className="discount-price">{p.discountprice ? `₹${p.discountprice}` : ''}</span></h3>
                                        <h4 className="offer">{p.offer}</h4>
                                        <h5 className="rating">{p.rating}</h5>
                                        <p className="reviews">{p.reviews}</p>
                                        <span className="description">{p.description}</span>
                                    <div className="button">
                                        <button>BUY NOW</button>
                                    </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}
