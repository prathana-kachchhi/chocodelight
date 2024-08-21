import React from 'react'
import './section3.scss';
import halfbg from '../../../assets/videos/section3.mp4';
import veg from '../../../assets/images/veg.png';
import eco from '../../../assets/images/eco.png';
import egg from '../../../assets/images/egg.png';

export default function Section3() {
  return (
    <div className='section3'>
      <section>
        <div className="maindiv">
          <div className="video">
            <video src={halfbg} autoPlay muted loop playsInline></video>

          </div>
          <div className="content">
            <div className="banner">
              <span>Choco Delight Chocolates, 1984.</span>
              <p>Origin Story Choco's originated out of a singular vision - to make the world’s finest chocolate.
                It all started out in a small warehouse in Hingashi-ku, Sapporo with just four people
                packing each chocolate bar by hand. The aroma of cookies baking in the small factory
                attracted neighbours, which, in turn, led to the opening and naming of the first shop
                as DELIGHTS’ Cookies.</p>
              <h4>We believe in sustainable lifestyles</h4>
            </div>
            <div className="images">
              <div className="veg">
                <img src={veg} alt="veg" />
                <h4>100% Vegetarian</h4>
              </div>
              <div className="eco">
                <img src={eco} alt="eco" />
                <h4>Environment Friendly</h4>
              </div>
              <div className="egg">
                <img src={egg} alt="egg" />
                <h4>Contains No Egg</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
