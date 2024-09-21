import React, { useEffect, useRef, useState } from 'react';
import './CustomSelect.scss'; // Adjust the path as needed

const CustomSelect = ({ options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option) => {
        onSelect(option.value); // Notify parent about the selection
        setIsOpen(false);
    };

    return (
        <div className="custom-select" ref={selectRef}>
            <div className="select-selected" onClick={() => setIsOpen(!isOpen)}>
                {options.find(option => option.value === selectedOption)?.label || 'Select an option'}
            </div>
            {isOpen && (
                <div className="select-items">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            <div className={`select-arrow ${isOpen ? 'select-arrow-active' : ''}`} />
        </div>
    );
};

export default CustomSelect;
