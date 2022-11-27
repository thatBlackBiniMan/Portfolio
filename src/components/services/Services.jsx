import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
    
    <div className="container services_container">
    
    
    
    
    <article className='service'>
        <div className="service_head">
        <h3>Software Development</h3>      
        </div>
      <ul className="service_list">
        <li>
          <BiCheck className='service_list-icon'/>
          <p>UI/UX Design</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Web Development</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Web 3 & Blockchain Dapps</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Sass Development</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Shopify Development</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Wordpress & Woo Commerce</p>
        </li>
      
      
      </ul>
      </article>
    
    
    
    
    
      <article className='service'>
        <div className="service_head">
        <h3>Medical Services</h3>      
        </div>
      <ul className="service_list">
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Basic Surgical Procedures (Cesearean section, Appendicectomy)</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Medical Locum Cover</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Laboratory & Radiological Results Interpretation</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Medical Outreach</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Medical Tutoring (Exams preparations)</p>
        </li> 
      
      </ul>
      </article>
    

      <article className='service'>
        <div className="service_head">
        <h3>Research / Writing</h3>      
        </div>
      <ul className="service_list">
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Research Writing</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Blog Articles Writing</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>E-books Design & Writing</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Web 3.0 & Blockchain Articles Writing</p>
        </li>
      
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Games Blog Posts & Articles</p>
        </li>
      
  
      
      </ul>
      </article>
    
    
    </div>
    </section>
  )
}

export default Services