import React, { useState } from 'react'
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.webp';
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { ImMenu } from 'react-icons/im';
import categoryApi from '../../categoryApi/categoryApi';
export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }

  const menuItem = categoryApi;
  return (
    <div className='header'>
      <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <div className="menu">
          {
            menuItem.map((e,i) => {
              return (
                <Link key={i} onClick={closeNav} to={e.path}>{e.category}</Link>
              )
            })
          }
        </div>
      </div>
      <div className="container">
        <header>
          <Link className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menubar">
            {
              menuItem.map((e,i) => {
                return (
                  <Link key={i} to={e.path}>{e.category}</Link>
                )
              })
            }
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
            <div onClick={openNav} className="icon-content menu-icon">
              <ImMenu className='icon' />
              <p>menu</p>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
