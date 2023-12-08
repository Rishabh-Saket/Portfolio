import React from 'react'
import './about.css'
import ME from '../../assests/me2.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolderKanban } from "react-icons/lu";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
         </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <LuFolderKanban className='about_icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Hello! I'm Rishabh Saket, a recent graduate with a passion for software engineering. 

            Graduated in 2022, I'm on a mission to make my mark in the world of technology. 

            Aspiring Software Engineer: Actively seeking a full-time position to contribute my skills and knowledge to an innovative organization. 

            My Toolbox:
            Languages: Java, JavaScript
            Technologies: REST API, Microservices, JDBC, SQL, Multi-threading, Socket Programming
            Problem-Solving: Strong grasp of Data Structures and Algorithms
            Concepts: DBMS, OS, Computer Networks, OOPs
            I believe in the power of collaboration and continuous learning. Let's connect and explore how we can make technology work for us.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About