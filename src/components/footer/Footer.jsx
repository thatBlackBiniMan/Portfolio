import React from 'react'
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
import {FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Dr OMORUYI OSARUGUE</a>
    
    <ul className='permalinks'>
     <li><a href="#">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#experience">Experience</a></li>
     <li><a href="#services">Services</a></li>
     <li><a href="#portfolio">Portfolio</a></li>
     <li><a href="#testimonials">Testimonials</a></li>
     <li><a href="#contact">Contact</a></li>
    </ul>
    

    <div className="footer_socials">
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
      <a href="https://instagram.com"><FaInstagram/></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Dr OMORUYI. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer