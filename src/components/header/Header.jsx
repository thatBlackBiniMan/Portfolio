import React from 'react'
import './header.css';
import CTA from'./CTA';
import ME from '../../assets/me2.jpg';


const Header = () => {
  return (
 <header>
  <div className="container header_container">
   <h5>Hello I'm</h5>
   <h1>Omoruyi Osarugue</h1>
   <h5 className="text-light">Medical Doctor & Blockchain Developer</h5> 
   <CTA/>
    
    <div className="me">
      <img src={ME} alt="" />
    </div>
  <a href="#contact" className="scroll_down">Keep Scrolling</a>
  </div>
 </header>
  )
}

export default Header