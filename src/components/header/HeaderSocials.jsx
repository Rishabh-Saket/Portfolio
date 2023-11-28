import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rishabh-saket-a940841b3/' target='_blank' rel="noreferrer" ><BsLinkedin /></a>
        <a href='https://github.com/Rishabh-Saket' target='_blank' rel="noreferrer" ><FaGithub /></a>

    </div>
  )
}

export default HeaderSocials