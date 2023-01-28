import NavLinks from "./NavLinks";
import "./Header.css";
import {TiThMenu} from 'react-icons/ti'
import {FaWindowClose} from 'react-icons/fa'
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <TiThMenu className='hamburger' size='40px' color ='black' 
                            onClick={() => setOpen(!open)}/*useState flips from false to true*/
                            />
    
    const closeIcon = <FaWindowClose className='hamburger' size='40px' color ='black' 
                        onClick={() => setOpen(!open)}/*useState flips from false to true*/
                        />

    const closeMobileMenu = () => setOpen(false);//when props.isMobile is set to true by the button click in the navbar the set value is changed to true

    return(
        <nav className= 'mobile-navigation'>
            {open ? closeIcon : hamburgerIcon /*If open show close icon otherwise sow hamburher icon*/}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />/* is open is true we show NavLinks otherwise we don't */}
        </nav>
    );
}

export default MobileNavigation;