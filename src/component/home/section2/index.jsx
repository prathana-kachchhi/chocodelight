import React from 'react';
import wp from '../../../assets/images/wp.png';

export default function Section2() {
    const handleWhatsAppClick = () => {
        // Ensure this is a full phone number including country code (e.g., '911234567890' for a number in India)
        const phoneNumber = "918780494671"; // Replace with your full number including country code
        const message = "Hello, I would like to know more about Choco Delight!"; // Optional: Predefined message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <div className="wp-icon" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
                <img src={wp} alt="WhatsApp" />
                <a href="https://api.whatsapp.com/send/?phone=8780494671&text=Hello%2C+I+would+like+to+know+more+about+Choco+Delight%21&type=phone_number&app_absent=0">Hey, Let's chat!</a>
            </div>
        </div>
    );
}
