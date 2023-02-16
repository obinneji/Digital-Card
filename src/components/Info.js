import React from 'react'
import { FaEnvelope } from "react-icons/fa"
import {FaLinkedin } from "react-icons/fa"
 

const Info = () => {
  return (
    <header>
      <img src= '../images/chibuzor-obinneji.jpeg' alt = "owner" className='user-image' />
      <h2 className='user-name'>Obinneji Chibuzor</h2>
      <p className='user-title'>Frontend Developer</p>
      <p className='user-website'>ObinnejiChibuzor.com</p>
      <a href='mailto:obinnejic@gmail.com'><button className='email-btn'><FaEnvelope className='contact-icon'/>Email</button></a>
      <a href='https://www.linkedin.com/in/obinneji/'><button className='linkedin-btn'><FaLinkedin className='contact-icon'/>LinkedIn</button></a>
    </header>
  )
}

export default Info
