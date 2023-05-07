import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rm.ekelschot@gmail.com</h5>
            <a href="mailto:rm.ekelschot@gmail.com" target='_black' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        {/* <form action="#" autoComplete='off'>
          <input type="text" name="name" placeholder='Uw naam' required/>
          <input type="email" name="email" placeholder='Uw Email adres' required/>
          <textarea name="message" rows="7" placeholder='Uw bericht'></textarea>
          <button type='submit' className='btn btn-primary'>Versturen</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact