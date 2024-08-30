import React, { useState, useEffect } from 'react'
import './Facecard.scss';

import facepic1 from '../assets/images/facepic1.webp';
import facepic2 from '../assets/images/facepic2.webp';
import facepic3 from '../assets/images/facepic3.webp';
import facepic4 from '../assets/images/facepic4.webp';
import facepic5 from '../assets/images/facepic5.webp';
import facepic6 from '../assets/images/facepic6.webp';
import facepic7 from '../assets/images/facepic7.webp';
import facepic8 from '../assets/images/facepic8.webp';
import facepic9 from '../assets/images/facepic9.webp';
import facepic10 from '../assets/images/facepic10.webp';
import facepic11 from '../assets/images/facepic11.webp';
import facepic12 from '../assets/images/facepic12.webp';
import facepic13 from '../assets/images/facepic13.webp';
import facepic14 from '../assets/images/facepic14.webp';
import facepic15 from '../assets/images/facepic15.webp';
import facepic16 from '../assets/images/facepic16.webp';
import facepic17 from '../assets/images/facepic17.webp';
import facepic18 from '../assets/images/facepic18.webp';
import facepic19 from '../assets/images/facepic19.webp';
import facepic20 from '../assets/images/facepic20.webp';
import facepic21 from '../assets/images/facepic21.webp';
import facepic22 from '../assets/images/facepic22.webp';
import facepic23 from '../assets/images/facepic23.webp';
import facepic24 from '../assets/images/facepic24.webp';
import facepic25 from '../assets/images/facepic25.webp';
import { FaSearch } from "react-icons/fa";



export const facepics = [
    { id: 1001, image: facepic1, name: "All Set To Go Banana Powder", price: "₹649" },
    { id: 1003, image: facepic2, name: "Base Of Glory Minimizing primer", price: "₹849" },
    { id: 1004, image: facepic3, name: "Powder Play Banana Compact", price: "₹649" },
    { id: 1002, image: facepic4, name: "All Set To Go Translucent Powder", price: "₹649" },
    { id: 1005, image: facepic5, name: "Aquaholic Priming Moisturizer.", price: "₹649" },
    { id: 1006, image: facepic6, name: "Grand Highlighting Setting Mist", price: "₹749" },
    { id: 1007, image: facepic7, name: "Citrus Got Real SPF30 Sunscreen ", price: "₹727" },
    { id: 1008, image: facepic8, name: "Grand Finale SPF30 Setting Mist", price: "₹749" },
    { id: 1009, image: facepic9, name: "Aquaholic Hydrating Foundation - 07 Vanilla Latte", price: "₹782" },
    { id: 1010, image: facepic10, name: "Face Fwd >> Primer Stick", price: "₹429" },
    { id: 1011, image: facepic11, name: "GSUGAR Goddess Of Flawless BB Serum - 27 Vienna", price: "₹799" },
    { id: 1012, image: facepic12, name: "Mettle Priming Balm ", price: "₹956" },
    { id: 1013, image: facepic13, name: "SUGAR Goddess Of Flawless BB Serum - 32 Cortado- 10 Latte", price: "₹899" },
    { id: 1014, image: facepic14, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1015, image: facepic15, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1016, image: facepic16, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1017, image: facepic17, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1018, image: facepic18, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1019, image: facepic19, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1020, image: facepic20, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1021, image: facepic21, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1022, image: facepic22, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1023, image: facepic23, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1024, image: facepic24, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
    { id: 1025, image: facepic25, name: "Aquaholic Hydrating Foundation - 10 Latte", price: "₹899" },
]



export default function Facecard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [maxPrice, setMaxPrice] = useState(2000);


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const filteredFacepics = facepics
        .filter((item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, '')); // Extract numeric value from price string
            const isWithinPriceRange = price <= maxPrice; // Only check maximum price
            const matchesSearchTerm = item.name.toUpperCase().includes(searchTerm.toUpperCase());
            return isWithinPriceRange && matchesSearchTerm;
        })
        .sort((a, b) => {
            if (sortOption === 'price-asc') {
                return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
            } else if (sortOption === 'price-desc') {
                return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
            } else if (sortOption === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else if (sortOption === 'name-desc') {
                return b.name.localeCompare(a.name);
            } else {
                return 0;
            }
        });
    return (
        <div>
            <div className="maincard">

                <div className="searchbar">
                    <FaSearch className='searchicon' />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="sortbar">
                    <label htmlFor="sort">Sort by: </label>
                    <select id="sort" value={sortOption} onChange={handleSortChange}>
                        <option value="">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
                <div className="price-filter">
                    <label htmlFor="max-price">Max Price: {maxPrice}₹</label>
                    <input
                        type="range"
                        id="max-price"
                        min="0"
                        max="2000"
                        step="50"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                    />
                </div>
                <div className="container">
                    <div className="section1">
                        {filteredFacepics.length > 0 ? (
                            filteredFacepics.map((facepics) => (
                                <div
                                    key={facepics}
                                    className="product"
                                >
                                    <div className="product-img">
                                        <img src={facepics.image} alt={facepics.name} />
                                    </div>
                                    <div className="product_bottom">
                                        <div className="details">
                                            <h4>{facepics.name}</h4>
                                            <p>{facepics.price}</p>
                                        </div>
                                        <div className="like-icon">
                                            <button className="add-to-cart" onClick={() => favoriteProduct(facepics)}><span>Choose Item</span></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No items found</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

