import React, { useState } from 'react'
import Delivery from './Delivery';
import './Home.css';
import { Link, useLoaderData } from "react-router-dom";

function Home() {

  const user = useLoaderData();
  // const [displayUsers, setUsers] = useState(user);
  console.log(user);
  return (
    <div className='home-container'>
      <h1>FRESH GROCERIES AWAIT</h1>
      <p>What are you waiting for?</p>
      <h1>{ user.firstname}</h1>
      <div className='home-btns'>
        <button className="nav-items-list">
          <Link to="/delivery">GET STARTED</Link>
        </button>
      </div>
    </div>
  )
}

export default Home