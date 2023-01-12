import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="nav-list">
        <div className ="nav-items">
            <button className="list"><Link to='/'>Home</Link></button>
            <button className="list"><Link to='/offers'>Offers</Link></button>
            <button className="list"><Link to='/products'>Products</Link></button>
            <button className="list"><Link to='/services'>Services</Link></button>
            <button className="list"><Link to='/delivery'>Delivery</Link></button>
            <button className="list"><Link to='/about us'>About us</Link></button>
        </div>
        <div className="signup-button">
            <button className='button-signup'><Link to='/signup'>SIGN UP</Link></button>
        </div>
    </nav>
  )
  
}

export default Header