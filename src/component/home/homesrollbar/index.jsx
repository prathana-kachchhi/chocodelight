import React, { useState, useEffect } from 'react';
import './homescrollbar.scss';
import first from '../../../assets/images/scroll-1.jpg';
import second from '../../../assets/images/scroll-2.jpg';
import third from '../../../assets/images/scroll-3.jpg';
import forth from '../../../assets/images/scroll-4.jpg';
import fifth from '../../../assets/images/scroll-5.jpg';
import sixth from '../../../assets/images/scroll-6.jpg';
import seventh from '../../../assets/images/scroll-7.jpg';
import eighth from '../../../assets/images/scroll-8.jpg';
import ninth from '../../../assets/images/scroll-9.jpg';
import tenth from '../../../assets/images/scroll-10.jpg';

export const products = [
    { id: 101, image: first, name: "", price: "$18.00" },
    { id: 102, image: second, name: "Macadamia Milk Chocolate", price: "$25.00" },
    { id: 103, image: third, name: "Cinnamon Dark Chocolate", price: "$15.00" },
    { id: 104, image: forth, name: "Blueberry Milk Chocolate", price: "$15.00" },
    { id: 105, image: fifth, name: "Hazelnut Praline Dark Chocolate", price: "$14.00" },
    { id: 106, image: sixth, name: "Salted Caramel White Chocolate", price: "$15.00" },
    { id: 107, image: seventh, name: "Honeycomb White Chocolate", price: "$15.00" },
    { id: 108, image: eighth, name: "Toffee Crunch Milk Chocolate", price: "$25.00" },
    { id: 109, image: ninth, name: "Almond Butter Milk Chocolate", price: "$15.00" },
    { id: 110, image: tenth, name: "Lavender White Chocolate", price: "$18.00" }
];

export default function Homescrollbar() {
    


    const [hoveredProduct, setHoveredProduct] = useState(null);

    return (
        <div className="chocoitem">
            <div className='chocobg'>
                <div className="container">
                    <div className="scrollbar">
                        {products.map(product => (
                            <div
                                key={product}
                                className="product"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="product-img">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="wishlist-icon">

                                </div>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                {hoveredProduct === product.id && (
                                    <button type='button' className="add-to-cart"><span>Add to Cart</span></button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
