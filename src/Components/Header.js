import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const[navbar, setNavbar] = useState(false);

  const changeBackground = () =>{
    console.log(window.scrollY);
    if(window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className='nav'>
      <div className= 'navbar'>
          <div className ={navbar ? "nav-items active" : 'nav-items'}>
              <button className="nav-items-list"><Link to='/'>Home</Link></button>
              <button className="nav-items-list"><Link to='/offers'>Offers</Link></button>
              <button className="nav-items-list"><Link to='/products'>Products</Link></button>
              <button className="nav-items-list"><Link to='/services'>Services</Link></button>
              <button className="nav-items-list"><Link to='/delivery'>Delivery</Link></button>
              <button className="nav-items-list"><Link to='/about us'>About Us</Link></button>
          </div>
          <div className="navbar-button">
              <button className='button-signup'><Link to='/signup'>SIGNUP</Link></button>
              <button className='button-login'><Link to='/login'>LOGIN</Link></button>
          </div>
      </div>
      {/* <hr className='horizontal-line'></hr> */}
    </nav>
  )
  
}

export default Header