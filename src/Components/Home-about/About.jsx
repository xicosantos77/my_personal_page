import "./About.scss";
import {Link} from "react-router-dom";


const HomeAbout = () => {

    return(
        <div class="about-wrapper">
            <div class="aboutme-wrapper">
                <div class="aboutme-title">
                    <h1>ABOUT ME</h1>
                </div>
                <div class="aboutme-divisor"></div>
                <div class="aboutme-desc">
                    <p>Here you will find information about me, what I do, and my current skills</p>
                    <p>mostly in terms of programming and technology.</p>
                </div>
            </div>
            <div class="about-details">
                <div class="about-details-text">
                    <div class="about-details-title">
                        <h3>GET TO KNOW ME</h3>
                    </div>
                    <div class="about-details-text-detail">
                        <p>
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. 
                        </p>
                        <p>
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                        </p>
                        <p>
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. 
                        </p>
                    </div>
                    <div class="about-details-button">
                        <button><Link to="ContactUs"><p>CONTACT</p></Link></button>
                    </div>
                </div>
                <div class="about-skills">
                    <div class="about-skills-title">
                        <h3>MY SKILLS</h3>
                    </div>
                    <div class="about-skills-skills">
                        <button><p>Scrum</p></button>
                        <button><p>UX/UI</p></button>
                        <button><p>HTML5</p></button>
                        <button><p>CSS3</p></button>
                        <button><p>SASS</p></button>
                        <button><p>Responsive Web Design</p></button>
                        <button><p>JavaScript</p></button>
                        <button><p>React.JS</p></button>
                        <button><p>GIT</p></button>
                        <button><p>MySQL</p></button>
                        <button><p>PHP</p></button>
                        <button><p>Laravel</p></button>
                        <button><p>REST APIs</p></button>
                        <button><p>MongoDB</p></button>
                        <button><p>NodeJS</p></button>
                        <button><p>ExpressJS</p></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeAbout; 