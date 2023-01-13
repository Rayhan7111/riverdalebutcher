import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="navbar">
        <div className ="nav-items">
            <button className="nav-items-list"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></button>
            <button className="nav-items-list"><Link to='/offers' style={{ textDecoration: 'none', color: 'white' }}>Offers</Link></button>
            <button className="nav-items-list"><Link to='/products' style={{ textDecoration: 'none', color: 'white' }}>Products</Link></button>
            <button className="nav-items-list"><Link to='/services' style={{ textDecoration: 'none', color: 'white' }}>Services</Link></button>
            <button className="nav-items-list"><Link to='/delivery' style={{ textDecoration: 'none', color: 'white' }}>Delivery</Link></button>
            <button className="nav-items-list"><Link to='/about us' style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></button>
        </div>
        <div className="signup-button">
            <button className='button-signup'><Link to='/signup' style={{ textDecoration: 'none', color: 'white'}}>SIGN UP</Link></button>
        </div>
    </nav>
  )
  
}

export default Header