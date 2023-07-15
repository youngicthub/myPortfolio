import React from "react";
import './about.css';
import AboutMe from '../.../../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'


const About = () =>{
    return(
      <section id="about">
        <h5> Get to know</h5>
        <h2>About Me</h2>

        <div className="container__about">
          <div className="about__me">

            <div className="about__img_me">
              <img src={AboutMe} alt="aboutmePics" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className="about__card">
                <FaAward className="about__icon"/>
                <h4>Experiences</h4>
                <small> 2+ Years working </small>
              </article>


              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h4>Team/Client</h4>
                <small> 2+ Globally </small>
              </article>


              <article className="about__card">
                <VscFolderActive className="about__icon"/>
                <h4>Projects</h4>
                <small> 10+ Individual Project Completed </small>
              </article>

            </div>
            <p>I am a Self-Taught  web developer specializing in ReactJS, CSS3, HTML5, and JavaScript. Throughout my career, I have successfully developed and implemented visually appealing, responsive and user-friendly web interfaces using these technologies.
</p>

            <a href="#contact" className="btn btn-primary">Contact me</a>
          </div>
        </div>
      </section>
    )
}

export default About;