import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav>
      <div className="navbar">
          <div className ="nav-items">
              <button className="nav-items-list"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></button>
              <button className="nav-items-list"><Link to='/offers' style={{ textDecoration: 'none', color: 'white' }}>Offers</Link></button>
              <button className="nav-items-list"><Link to='/products' style={{ textDecoration: 'none', color: 'white' }}>Products</Link></button>
              <button className="nav-items-list"><Link to='/services' style={{ textDecoration: 'none', color: 'white' }}>Services</Link></button>
              <button className="nav-items-list"><Link to='/delivery' style={{ textDecoration: 'none', color: 'white' }}>Delivery</Link></button>
              <button className="nav-items-list"><Link to='/about us' style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></button>
          </div>
          <div className="navbar-button">
              <button className='button-signup'><Link to='/signup' style={{ textDecoration: 'none', color: 'white'}}>SIGNUP</Link></button>
              <button className='button-login'><Link to='/login' style={{ textDecoration: 'none', color: 'white'}}>LOGIN</Link></button>
          </div>
      </div>
      <hr className='horizontal-line'></hr>
    </nav>
  )
  
}

export default Header