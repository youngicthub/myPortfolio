import React from "react";
import "./contact.css";

import {GrMail} from 'react-icons/gr';
import {SiMessenger} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nu5n89l', 'template_i1szaua', form.current, 'AG_I-mxvcoZ3KJc4Z')

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>Contact Me </h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactItem">

            <GrMail className="contactIcons"/>
            <h4>Email </h4>
            <h5> youngicthub@gmail.com</h5>
            <a href="mailto:youngicthub@gmail.com" target="_blank">Send us mail</a>
          </article>

          <article className="contactItem">
            
            <SiMessenger className="contactIcons"/>
            <h4>Fb Messenger </h4>
            <h5> DanGoodnews</h5>
            <a href="https://m.me/youngicthub009" target="_blank" >Text also on FaceBook</a>
          </article>

          <article className="contactItem">
            
            <BsWhatsapp className="contactIcons"/>
            <h4>WhatsApp </h4>
            <h5> +234 813 007 8945</h5>
            <a href="https://api.whatsapp.com/.com//send?phone=+2349169745128" target="_blank">Send us mail</a>
          </article>
        </div>

        {/* End of Contact Option */}

        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
