import React from 'react'
import './collections.scss';
import nama from '../../../assets/images/nama.jpg';
import gift from '../../../assets/images/gift.jpg';
import newarrival from '../../../assets/images/newarrival.jpg';
export default function Collections() {
    return (
        <div className='section1'>
            <div className="container">
                <section>
                    <h2>Our Collections</h2>
                    <p>Some things sweet, some things salty, all things indulgent - we have got something for everyone.</p>
                    <div className="collection">
                        <div className="img">
                            <div className="img1">
                                <img src={nama} alt="1nama" /><p>Name Chocolate</p>
                            </div>
                            <div className="img2">
                                <img src={gift} alt="2gift" />
                                <p>Gifts Chocolate</p>
                            </div>
                            <div className="img3">
                                <img src={newarrival} alt="3new" />
                                <p>New Arrivals</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
