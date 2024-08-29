import React from 'react';
import wp from '../../../assets/images/wp.png';
import './whatsapp.scss';


export default function Whatsapp() {
    const handleWhatsAppClick = () => {

        const phoneNumber = "918780494671";
        const message = "Hello, I would like to know more about Choco Delight!";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className='talk'>
            <div className="wp-icon" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
                <img src={wp} alt="WhatsApp" width={40} />
                <a href="https://api.whatsapp.com/send/?phone=911234567890&text=Hello%2C+I+would+like+to+know+more+about+Choco+Delight%21&type=phone_number&app_absent=0">let's chat</a>
            </div>
        </div>
    );
}
