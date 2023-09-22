import "./Home-projects.scss";
import {Link} from "react-router-dom";

import demoImg from '../../Assets/Images/Projects/projectDemo.png';


const HomeProjects = () => {

    return(
        <div class="projects-wrapper">
            <div className="projects-head">
                <div className="projects-head-title">
                    <h1>PROJECTS</h1>
                </div>
                <div className="projects-head-divisor"></div>
                <div className="projects-head-desc">
                    <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>
                </div>
            </div>
            <div className="projects-project">
                <div className="projects-project-img">
                    <img src={demoImg} alt="img-project-demo" />
                </div>
                <div className="projects-project-desc">
                    <div className="projects-project-desc-title">
                        <h3>DEMO PROJECT</h3>
                    </div>
                    <div className="projects-project-desc-text">
                        <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
                    </div>
                    <div className="projects-project-desc-button">
                        <button><Link to="ContactUs"><p>CASE STUDY</p></Link></button>
                    </div>
                </div>
            </div>
            <div className="projects-project">
                <div className="projects-project-img">
                    <img src={demoImg} alt="img-project-demo" />
                </div>
                <div className="projects-project-desc">
                    <div className="projects-project-desc-title">
                        <h3>DEMO PROJECT</h3>
                    </div>
                    <div className="projects-project-desc-text">
                        <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
                    </div>
                    <div className="projects-project-desc-button">
                        <button><Link to="ContactUs"><p>CASE STUDY</p></Link></button>
                    </div>
                </div>
            </div>
            <div className="projects-project">
                <div className="projects-project-img">
                    <img src={demoImg} alt="img-project-demo" />
                </div>
                <div className="projects-project-desc">
                    <div className="projects-project-desc-title">
                        <h3>DEMO PROJECT</h3>
                    </div>
                    <div className="projects-project-desc-text">
                        <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
                    </div>
                    <div className="projects-project-desc-button">
                        <button><Link to="ContactUs"><p>CASE STUDY</p></Link></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeProjects; 