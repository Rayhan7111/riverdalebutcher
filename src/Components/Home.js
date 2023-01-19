import React from 'react'
import Delivery from './Delivery';
import './Home.css';
import { Link } from "react-router-dom";

function home() {
  return (
    <div className='home-container'>
      <h1>FRESH GROCERIES AWAIT</h1>
      <p>What are you waiting for?</p>
      <div className='home-btns'>
        <button className="nav-items-list">
          <Link to="/delivery">GET STARTED</Link>
        </button>
      </div>
    </div>
  )
}

export default home