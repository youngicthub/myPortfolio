import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { ImDribbble } from "react-icons/im";

const Footer = () => {
  return (
    <div className="container footerContainer">
      <div className="conatainer-footer">
        <article className="links">
          <div className="quicklink">
            <h2>Quick Links</h2>
          </div>
          <div className="quciLinks">
            <a href="#about"> About us</a>
            <a href="#contact"> Contact us</a>
            <a href="#portfolio"> Our Portfolio</a>
            <a href="#testimonial"> Our Testimonial</a>
            <a href="#experiences"> Experiences</a>
          </div>
        </article>

        <article className="footerLinks">
          <h2> Social Links</h2>
          <div className="footerLink">
            <a href="https://www.linkedin.com/" target="_blank">
              <BsLinkedin className="footerIcon" />
            </a>
            <a href="https://www.github.com/" target="_blank">
              {" "}
              <BsGithub className="footerIcon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="footerIcon" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <AiFillTwitterSquare className="footerIcon" />
            </a>
            <a href="https://dribbble.com/account/profile" target="_blank">
              <ImDribbble className="footerIcon" />
            </a>
          </div>
        </article>

        <article className="contacDetail">
          <h2>Contact</h2>
          <div className="contact">
            <h5>Phone: +234 813 007 8945</h5>
            <h5>Email: youngicthu@gmail.com</h5>
          </div>
        </article>

        <article className="address">
          <h2>Address </h2>
          <small>
            No 26 Aker Road, Iwofe, Port Harcourt <br /> Rivers State Nigeria
          </small>
        </article>
      </div>

      <p>
        &copy; 2023 Your Company. All rights reserved. | Portfolio Website by{" "}
        <a href="https://www.youngicthub.com">YoungICT Hub </a>
      </p>
    </div>
  );
};

export default Footer;
