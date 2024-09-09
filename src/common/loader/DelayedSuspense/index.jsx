import React from 'react';
import './loader.scss';
import loader from '../../../assets/images/loader.gif';

export default function Loader() {
  return (
      <div className="loader">
           <img src={loader} alt="loader" />
    </div>
  )
}
