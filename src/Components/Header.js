import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import NavLinks from "./NavLinks";
 
function Header() {

  return (
    <nav className='nav'>
      <MobileNavigation></MobileNavigation>
      <Navigation></Navigation>
      
      {/* <hr className='horizontal-line'></hr> */}
    </nav>
  );
}

export default Header;
