import React from 'react'
import '../src/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Whatsapp from './component/home/whatsapp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Whatsapp />



    </div>
  )
}
