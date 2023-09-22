import React from "react";

import HomeHeader from "../Components/Home-header/Home-header";
import HomeAbout from "../Components/Home-about/About";
import HomeProjects from "../Components/Home-projects/Home-projects";
import HomeContact from "../Components/Home-contact/Home-contact";

const Home = () => {

    return(
        <div>
            <HomeHeader></HomeHeader>
            <HomeAbout></HomeAbout>
            <HomeProjects></HomeProjects>
            <HomeContact></HomeContact>
        </div>
    )
}

export default Home;