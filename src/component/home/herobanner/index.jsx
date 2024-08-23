import React from 'react'
import './herobanner.scss';
import video from '../../../assets/videos/homevideo.mp4';
export default function Herobanner() {
  return (
    <div className='herobanner'>
      <div className="container">
        <section>

          <div className="contant">
            <h1 className='animate__animated animate__fadeInDown wow' data-wow-offset="200">Welcome to Choco Delights.</h1>
            <h3>Fine Chocolate From India</h3>
            <h4>
              Choco Delights where every bite takes you on a journey to pure bliss.
              Our chocolates are crafted to perfection, offering a delectable balance of rich
              flavors and smooth textures. From the finest ingredients to the love poured into
              each creation, we invite you to indulge and "Feel Sweet" with every treat. Let
              Choco Delight be your go-to destination for a moment of happiness, one delicious
              chocolate at a time!
            </h4>

            <div className="button">
              <button className="animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <p>Know More</p>
              </button>
            </div>

          </div>
          <div className="video animate__animated animate__fadeInRight wow" data-wow-offset="200">
            <video src={video} autoPlay loop muted playsInline ></video>
          </div>
        </section>
      </div>
    </div>
  )
}
