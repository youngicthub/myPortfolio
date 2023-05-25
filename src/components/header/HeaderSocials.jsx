import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.github.com/" target='_blank'> <BsGithub/></a>
        <a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare /></a>
        <a href="https://www.twitter.com/" target='_blank'><AiFillTwitterSquare /></a>
    </div>
  )
}



export default HeaderSocials