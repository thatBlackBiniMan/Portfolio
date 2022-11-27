import React from 'react'
import './about.css';
import ME from '../../assets/surgeon.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
 
   <div className="about_content">
     <div className="about_cards">
      
     <article className='about_card'>
      <FaAward className='about_icon'/>
      <h5>Experience</h5>
       <small>4+ Years Working</small>
    </article>
   
    <article className='about_card'>
      <FiUsers className='about_icon'/>
      <h5>Clients</h5>
       <small>70+ Globally</small>
    </article>
   
    <article className='about_card'>
      <VscFolderLibrary className='about_icon'/>
      <h5>Projects</h5>
       <small>100+ Completed</small>
       </article>
      </div>

      <p>
        I am a multilingual Speaker(English, Spanish, French), MBBS Holder, A First-year Resident in Histopathology and also currently doing my MPH(Master's in public health) with so much interest in Blockchain technologies ,Crypto currencies and NFT's. <br/>
        An expert in M.sc and Ph.D Dissertation and Thesis, Research proposal, Editing, Data Entry, Article writing in Medicine, Psychology, Nutrition, Psychiatry, Fitness, Blockchain Technologies, CryptoCurrency, NFT's.
        <br/>
        <br/>
          As we all know and must accept the world has gone digital.
          I recently became a Blockchain software developer and a crypto enthusiast,
          currently worki researching on DEFI, NFT's, GAMEFI.
          I can provide quick, reliable and professional evidence based documentations.
          I am very keen on producing quality work that satisfies my clients so please be very descriptive with your request. Moreover following up with my client is a priority to ensure an excellent client centered product.
        <br/>
        <br/>
          If you desire high-quality Blockchain dapps, research proposal writing, proofreading, Article writing, data entry within a short period,
          feel free to send me a message, and we will set up a time to talk.
        </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
  </section>
  )
}

export default About