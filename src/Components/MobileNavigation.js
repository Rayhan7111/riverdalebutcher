import NavLinks from "./NavLinks";
import "./Header.css";
<<<<<<< HEAD
// import {TFiMenu} from 'react-icons/tf'
=======
import {TiThMenu} from 'react-icons/ti'
import {FaWindowClose} from 'react-icons/fa'
import { useState } from "react";
>>>>>>> 9f7fd9a3aa72fe1a8b7b167c2b84ab13a3d93f27

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
<<<<<<< HEAD
            {/* <TFiMenu className='hamburger' size='40px' color='white' /> */}
        <NavLinks/>
=======
            {open ? closeIcon : hamburgerIcon /*If open show close icon otherwise sow hamburher icon*/}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />/* is open is true we show NavLinks otherwise we don't */}
>>>>>>> 9f7fd9a3aa72fe1a8b7b167c2b84ab13a3d93f27
        </nav>
    );
}

export default MobileNavigation;