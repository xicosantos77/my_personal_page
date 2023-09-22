import React from "react"; 
import "./Home-header.scss"; 
import {Link} from 'react-router-dom';

const HomeHeader = () => {

    return(
        <div class="homeheader">
            <div class="homeheader-wrapper">
                <div class="homeheader-title">
                    <h1>HEY, I'M</h1>
                    <h1>FRANCISCO DE SOUSA</h1>
                </div>
                <div class="homeheader-desc">
                    <p>A FULLSTACK WEB DEVELOPER FOCUSED ON BRINGING SOLUTIONS AND SUCCESS</p>
                    <p>TO THE OVERALL PRODUCT</p>
                </div>
                <div class="homeheader-button">
                    <button><Link to="Blog"><p>PROJECTS</p></Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;