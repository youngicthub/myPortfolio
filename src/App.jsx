import React from "react";
import Hearder from "./components/header/header";
import Nav from "./components/Nav/nav";
import About from "./components/about/about";
import Experiences from "./components/Experiences/experiences";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";



const App = () =>{
    return(
        <>
        <Hearder />
        <Nav />
        <About />
        <Experiences />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
        </>
    )
}

export default App;