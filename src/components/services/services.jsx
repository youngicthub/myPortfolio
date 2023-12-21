import React from "react";
import "./services.css";
import { BsCheckAll } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What is do</h5>
      <h2>My Services </h2>

      <div className="container container__services">
        <article className="services"> 
          <div className="service__head"> 
            <h3> Graphic Dessign </h3>
          </div>
          <ul className="serviceList">
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>Logo Making</p>
            </li>

            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>Branding</p> 
            </li>
           </ul>
        </article>
        {/* End of Web Dev Services */}

        <article className="services">
          <div className="service__head">
            <h3> Web Development </h3>
          </div>
          <ul className="serviceList">
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>Responsive Portfolio websites</p>
            </li>

            <li>
              <BsCheckAll className="serviceList-icon" />
              <p> Company websites</p>
            </li>
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p> Broker websites</p>
            </li>
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p> Educational websites</p>
            </li>

            <li>
              <BsCheckAll className="serviceList-icon" />
              <p> Business websites</p>
            </li>

            <li>
              <BsCheckAll className="serviceList-icon" />
              <p> Blogging websites</p>
            </li>

            <li>
              <BsCheckAll className="serviceList-icon" />
              <p> Touring websites</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev Services */}


        <article className="services">
          <div className="service__head">
            <h3> Online Applications </h3>
          </div>
          <ul className="serviceList">
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>School Applications</p>
            </li>

            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>Jamb Application</p>
            </li>
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>Visa Application</p>
            </li>
            <li>
              <BsCheckAll className="serviceList-icon" />
              <p>Promotional Services/Advert </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
