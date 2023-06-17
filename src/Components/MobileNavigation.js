import NavLinks from "./NavLinks";
import "./Header.css";
// import {TFiMenu} from 'react-icons/tf'

const MobileNavigation = () => {
    return(
        <nav className= 'mobile-navigation'>
            {/* <TFiMenu className='hamburger' size='40px' color='white' /> */}
        <NavLinks/>
        </nav>
    );
}

export default MobileNavigation;