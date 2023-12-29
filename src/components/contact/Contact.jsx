import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rsssaket99@gmail.com</h5>
            <a href='mailto:rsssaket99@gmail.com' target='_blank'> Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='button' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact