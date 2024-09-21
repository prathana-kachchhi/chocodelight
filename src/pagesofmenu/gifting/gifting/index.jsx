import React, { useEffect, useState } from 'react';
import './gifting.scss';
import categoryApi from '../../../categoryApi/categoryApi';
import { Link } from 'react-router-dom';
import CustomSelect from '../../../coustomhook/select';

export default function Gifting() {
    const [sortitem, setsortitem] = useState('default');

    const chocolateOptions = [
        { value: 'default', label: 'Select chocolates' },
        { value: 'price-low-to-high', label: 'Price: Low to High' },
        { value: 'price-high-to-low', label: 'Price: High to Low' },
        { value: 'a-to-z', label: 'A to Z' },
        { value: 'z-to-a', label: 'Z to A' }
    ];

    const fullPlaceholder = "Search for chocolates...";
    const [searchTerm, setSearchTerm] = useState("");
    const [placeholder, setPlaceholder] = useState(fullPlaceholder);
    const [isRemoving, setIsRemoving] = useState(true);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const showInfo = (e) => {
        localStorage.setItem('id', JSON.stringify(e));
    };

    const gifting = categoryApi[1].product;

    // Filter products based on search term
    const filteredProducts = gifting.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products based on criteria
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/,/g, ''));

        switch (sortitem) {
            case 'price-low-to-high':
                return priceA - priceB;
            case 'price-high-to-low':
                return priceB - priceA;
            case 'a-to-z':
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            case 'z-to-a':
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
            default:
                return 0; // Default order
        }
    });

    // Get current page products
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Placeholder animation effect
    useEffect(() => {
        let timeout;

        if (isRemoving) {
            if (placeholder.length > 0) {
                timeout = setTimeout(() => {
                    setPlaceholder((prev) => prev.slice(1));
                }, 400);
            } else {
                setIsRemoving(false);
            }
        } else {
            if (placeholder.length < fullPlaceholder.length) {
                timeout = setTimeout(() => {
                    setPlaceholder((prev) => fullPlaceholder.slice(0, prev.length +  1));
                }, 400);
            } else {
                setAnimationCompleted(true);
                setIsRemoving(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [placeholder, isRemoving]);

    const handleSearchInput = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value === "") {
            setPlaceholder(fullPlaceholder);
        }
    };

    // Pagination Controls
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className='gift'>
            <div className="heading">
                <h1>GIFTING CHOCOLATES</h1>
            </div>

            {/* Search Bar */}
            <div className="search-sort-bar">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearchInput}
                    className="search-bar"
                />

                {/* Sorting Options */}
                <CustomSelect
                    options={chocolateOptions}
                    selectedOption={sortitem}
                    onSelect={setsortitem}
                />
            </div>

            <div className="container">
                <div className="gift-p">
                    {currentProducts.length > 0 ? (
                        currentProducts.map((p) => (
                            <Link
                                to={'/productinfo'}
                                className="gift-p-item"
                                key={p.id}
                                onClick={() => showInfo(p.id)}
                            >
                                <div className="cart-img">
                                    <img src={p.giftImg?.[0]} alt={p.name} />
                                </div>
                                <div className="info">
                                    <h3>{p.name}</h3>
                                    <div className='price'>
                                        <p>Rs. {p.price}</p>
                                    </div>
                                </div>
                                <div className="add-btn">
                                    <button>ADD TO CART</button>
                                </div>
                            </Link>
                        ))
                    ) : animationCompleted && searchTerm === "" ? (
                        <p>No chocolates found</p>
                    ) : null}
                </div>

                {/* Pagination Controls */}
                <div className="pagination-controls">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
