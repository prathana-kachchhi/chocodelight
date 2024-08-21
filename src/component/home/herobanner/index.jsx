import React from 'react'
import './herobanner.scss';
import video from '../../../assets/videos/homevideo.mp4';
export default function Herobanner() {
  return (
    <div className='herobanner'>
      <div className="container">
        <section>
          <div className="contant">
            <h1>Choco Delights , 1984. </h1>
            <h3>Fine Chocolate From Japan</h3>
            <h4>Origin Story
              ROYCE’ originated out of a singular vision - to make the world’s finest chocolate.
              It all started out in a small warehouse in Hingashi-ku, Sapporo with just four people
              packing each chocolate bar by hand. The aroma of cookies baking in the small factory
              attracted neighbours, which, in turn, led to the opening and naming of the first shop
              as ROYCE’ Cookies.</h4>

            <div className="button">
              <button>
                <p>Know More</p>
              </button>
            </div>

          </div>
          <div className="video">
            <video src={video} autoPlay loop muted playsInline ></video>
          </div>
        </section>
      </div>
    </div>
  )
}
