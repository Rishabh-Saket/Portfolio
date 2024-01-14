import React from 'react'
import './services.css'
import { MdCheck } from "react-icons/md";
const Services = () => {
  return (
    <section id='service'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
          {/* Start of UI */}
          <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Visual Design</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Design evaluation</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Pattern library</p>
              </li>
            </ul>
          </article>
        {/** END OF UI */}

        {/* Start of Web Development */}
        <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Website development</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Custom web applications</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Mobile responsiveness</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Website architecture</p>
              </li>
            </ul>
          </article>
        {/** END OF Web Development */}

        {/* Start of Web Development */}
        <article className='service'>
            <div className='service__head'>
              <h3>Backend Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <MdCheck className='service__list-icon' />
                <p>API development</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Databasse design</p>
              </li>
              <li>
                <MdCheck className='service__list-icon' />
                <p>Network programming</p>
              </li>
            </ul>
          </article>
        {/** END OF Web Development */}
        </div>
    </section>
  )
}

export default Services