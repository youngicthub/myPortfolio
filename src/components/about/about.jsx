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
                <h4>Clients</h4>
                <small> 150+ Worldwide </small>
              </article>


              <article className="about__card">
                <VscFolderActive className="about__icon"/>
                <h4>Projects</h4>
                <small> 30+ Completed </small>
              </article>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut ut nisi ipsam inventore praesentium error possimus. Fugiat esse perferendis velit quisquam vel, saepe, quis quibusdam, quia repellat sit quae.</p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </section>
    )
}

export default About;