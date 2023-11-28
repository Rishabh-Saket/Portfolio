import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from 'react';
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''}><FaRegUser /></a>
      <a href='#experiences' onClick={()=> setActiveNav('#experiences')} className={activeNav==='#experiences'? 'active' : ''}><MdOutlineLibraryBooks /></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav==='#services'? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'? 'active' : ''}><MdOutlineMessage /></a>
    </nav>
  )
}

export default Nav