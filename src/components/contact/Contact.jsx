import React from 'react'
import './contact.css';
import {TfiEmail} from 'react-icons/tfi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Feel Free To</h5>
      <h2>Contact Me</h2>
 
    <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
          <TfiEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>omoruyiosarugue20@gmail.com</h5>
          <a href="mailto:omoruyiosarugue20@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className='contact_option'>
          <FaFacebookMessenger className='contact_option-icon'/>
          <h4>Facebook Messenger</h4>
          <h5>Omoruyi Osarugue</h5>
          <a href="https://m.me/omoruyi.osarugue" target="_blank">Send a message</a>
        </article>

        <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+2437069093120</h5>
          <a href="https://api.whatsapp.com/send?phone+2437069093120" target="_blank">Send a message</a>
        </article>


      </div>
    <form action="">
      <input type="text" name='name' placeholder='Your full name' required/>
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" placeholder='Enter Your Message' rows="7" required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
 
 
 
    </section>
  )
}

export default Contact