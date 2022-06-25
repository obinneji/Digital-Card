import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='card-footer'>
      <a href='www.facebook.com/obinneji-chibuzor/'><FaFacebookSquare className='footer-icon'/></a>
      <a href='twitter.com/francisobinneji/'><FaTwitterSquare  className='footer-icon'/></a>
      <a href='www.instagram/obinneji.chibuzor/'><FaInstagramSquare  className='footer-icon'/></a>
      <a href='www.github.com/obinneji'><FaGithubSquare className='footer-icon'/></a>
    </footer>
      
  )
}

export default Footer
