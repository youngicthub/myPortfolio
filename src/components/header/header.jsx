import React from "react";
import "../header/header.css";
// import "../about/about.css";
import AboutMe from "../../assets/bg2.png";
import CTA from "./CTA";
// import Pics from "../../assets/bg.png";
import HeaderSocials from "./HeaderSocials";

const Hearder = () => {
  return (
    <header>
      <div className="containerHeader">
        <h5> Hello I am </h5>
        <h1> Dan Goodnews</h1>
        <h5 className="text-light"> FrontEnd Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div id="about__me">
          <div id="about__img_me">
            <img src={AboutMe} alt="aboutmePics" />
          </div>
        </div>

        {/* <div className="pics">
          <img src={Pics} alt="pics" />
        </div> */}

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Hearder;
