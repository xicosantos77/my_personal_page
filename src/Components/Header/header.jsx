import "./header.scss";
import React, {useState} from 'react'; 
import {Link} from 'react-router-dom';

import faceImg from '../../Assets/Images/Foto-selfie.jpg';

const Header = ()=> {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <header className="header">
            <div className="header-logo">
                <img src={faceImg} alt="foto" />
                <h1>FRANCISCO DE SOUSA</h1>
            </div>
            
            <div className="header-nav"> 
                <nav>    
                    <ul>
                        <li className="header-nav-item"><h1><Link to="/">HOME</Link></h1></li>
                        <li className="header-nav-item"><h1><Link to="AboutUs">ABOUT</Link></h1></li>
                        <li className="header-nav-item"><h1><Link to="Blog">PROJECTS</Link></h1></li>
                        <li className="header-nav-item"><h1><Link to="ContactUs">CONTACT</Link></h1></li> 
                    </ul>
                </nav>
            </div>
            {/* 
            <div  className={`header-nav-hamburguer ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div className={`header-nav-hamburguer-menu ${showMenu ? 'active' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/AboutUs">About Us</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li id="subscribe-button-hamburguer"><Link to="/Subscribe"><input type="button"  id="subscribe-button" value = "Subscribe" /></Link></li> 
                    </ul>
                </nav>
            </div>  
            */}
        </header>
    )
}

export default Header;