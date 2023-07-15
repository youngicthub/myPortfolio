import React from "react";
import './experiences.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experiences = () =>{
    return(
       <section id="experiences">
       <h5>The Skills I Have</h5>
       <h2>Experiences</h2>
{/* FrontEnd Dev Skills/Experiences */}

       <div className="experience__container">
        <div className="experience__frontEnd">
            <h3>FrontEnd Development</h3>
            <div className="experience__content">

                <article className="experince__ddetails">
                    <BsPatchCheckFill className="experienceIcons"/>
                    <div>
                    <h4> HTML5 </h4>
                    <small className="text-light">Experienced</small>
                    </div>
                </article>

                <article className="experince__ddetails">
                    <BsPatchCheckFill className="experienceIcons"/>
                    <div>
                    <h4> CSS3 </h4>
                    <small className="text-light">Experienced</small>
                    </div>
                </article>

                <article className="experince__ddetails">
                    <BsPatchCheckFill className="experienceIcons"/>
                    <div>
                    <h4> JavaScript </h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>

                <article className="experince__ddetails">
                    <BsPatchCheckFill className="experienceIcons"/>
                    <div>
                    <h4> React.js  </h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
            </div>
        </div>

{/* BackEnd Dev */}
        <div className="experience__backEnd">
            <h3>BackEnd Development</h3>
            <div className="experience__content">

                <article className="experince__ddetails">
                    <BsPatchCheckFill className="experienceIcons"/>
                    <div>
                    <h4> Nodejs </h4>
                    <small className="text-light">Basics</small>
                    </div>
                </article>

               
                <article className="experince__ddetails">
                    <BsPatchCheckFill className="experienceIcons"/>
                    <div>
                    <h4> MogoDB </h4>
                    <small className="text-light"> In-View </small>
                    </div>
                </article>

            </div>
        </div>

       </div>

       </section>
    )
}

export default Experiences;