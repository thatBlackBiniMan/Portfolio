import React, {useState} from 'react'
import './nav.css';
import {BiHomeHeart} from 'react-icons/bi';
import {FaUserAstronaut} from 'react-icons/fa';
import {BiBookReader} from 'react-icons/bi';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdContactPhone} from 'react-icons/md';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
  <nav>
    <a href="#" className={activeNav == '#' ? 'active' : ''}><BiHomeHeart/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookReader/></a>
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerService2Fill/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>

  </nav>
  )
}

export default Nav