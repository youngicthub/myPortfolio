import React from "react";
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserVoice} from 'react-icons/bi'
import {BsBookmarkPlusFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactless} from 'react-icons/md'
import { useState } from "react";



const Nav = () =>{
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /> </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiUserVoice /> </a>
            <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><BsBookmarkPlusFill /> </a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /> </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactless /> </a>
        </nav>
    )
}

export default Nav;