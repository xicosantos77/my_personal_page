import "./Footer.scss";
import {Link} from "react-router-dom";


import instagram from '../../Assets/Images/Footer/instagram.png';
import linkedin from '../../Assets/Images/Footer/linkedin.png';
import github from '../../Assets/Images/Footer/github.png';

const Footer = () => {

    return(
        <footer className="footer-wrapper">
            <div class="footer-top">
                <div className="footer-nav">
                    <div className="footer-nav-logo">
                        <h2><Link to="/">FRANCISCO DE SOUSA</Link></h2>
                    </div>
                    <div className="footer-nav-desc">
                        <p>A FULLSTACK WEB DEVELOPER FOCUSED ON BRINGING SOLUTIONS AND SUCCESS TO THE OVERALL PRODUCT</p>
                    </div>
                </div>
                <div className="footer-social">
                    <div className="footer-social-title">
                        <h2>SOCIAL</h2>
                    </div>
                    <div className="footer-subs-socialmedia">
                        <div class="footer-subs-img-1"><a href="https://www.instagram.com/xicodesousa.s/"><img src={instagram} alt="" /></a></div>
                        <div class="footer-subs-img-2"><a href="https://www.linkedin.com/in/franciscodesousaa472/"><img src={linkedin} alt="" /></a></div>
                        <div class="footer-subs-img-3"><a href="https://github.com/xicosantos77"><img src={github} alt="" /></a></div>
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <p>&copy; COPYRIGHT 2023. MADE BY <a href="www.franciscodesousa.vercel.app">FRANCISCO DE SOUSA</a></p>
            </div>

        </footer>
    )

}

export default Footer; 