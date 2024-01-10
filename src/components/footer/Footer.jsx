import React from 'react'
import './footer.css'
import { IoLogoGithub } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SAKET</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/Rishabh-Saket'><IoLogoGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer