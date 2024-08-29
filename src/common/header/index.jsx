import React, { useState } from 'react'
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.webp';
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  }


  const closeNav = () => {
    setIsNavOpen(false);
  }
  return (
    <div className='header'>
      <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
        <Link className="closebtn" onClick={closeNav}>&times;</Link>
        <div className="menu">
          <a href="Shop By Category">Shop By Category</a>
          <a href="Gifting">Gifting</a>
          <a href="Shop By Festival">Shop By Festival</a>
          <a href="Health Friendly">Health Friendly</a>
          <a href="Media">Media</a>
          <a href="Shop All">Shop All</a>
        </div>
      </div>
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menubar">
            <a href="Shop By Category">Shop By Category</a>
            <ul className='navdropdown'>
              <li>Bars</li>
              <li>Varities</li>
              <li>Dessert</li>
            </ul>
            <a href="Gifting">Gifting</a>
            <a href="Shop By Festival">Shop By Festival</a>
            <a href="Health Friendly">Health Friendly</a>
            <a href="Media">Media</a>
            <a href="Shop All">Shop All</a>
          </div>
          <div className="icons">
            <div className="icon-content">
              <BiSolidSearchAlt2 className='icon serch' />
              <p>search</p>
            </div>
            <div className="icon-content">
              <FaUser className='icon profile' />
              <p>profile</p>
            </div>
            <div className="icon-content">
              <GiShoppingBag className='icon cart' />
              <p>cart</p>
            </div>
          </div>
          <div className="menu-icon">
            <div onClick={openNav}>
              <IoMenu className='icon menu' />
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
