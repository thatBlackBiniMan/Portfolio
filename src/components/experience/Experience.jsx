import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
       <h2>My Experience</h2>
  
     <div className="container experience_container">
      <div className="experience_frontend">
       <h3>Medical & Academic Experiences</h3>
      <div className="experience_content">
     
     
      <article className='experience_details'>
         <BsPatchCheckFill/>
         <h4>Clinical Medicine and Basic Surgical Skills</h4>
        <small className='text-light'>Experienced</small>
         </article>

     
     
     
        <article className='experience_details'>
         <BsPatchCheckFill/>
         <h4>Research Writing</h4>
        <small className='text-light'>Experienced</small>
         </article>

         <article className='experience_details'>
         <BsPatchCheckFill/>
         <h4>Article Writing</h4>
        <small className='text-light'>Experienced</small>
         </article>

     

         <article className='experience_details'>
         <BsPatchCheckFill/>
         <h4>Ebooks Writing and Design</h4>
        <small className='text-light'>Experienced</small>
         </article>


         <article className='experience_details'>
         <BsPatchCheckFill/>
         <h4>Clinical Medicine and Basic Surgical Skills</h4>
        <small className='text-light'>Experienced</small>
         </article>

      </div>
      </div>
     
      <div className="experience_backend">
      <div className="experience_content">
     
     
     <article className='experience_details'>
        <BsPatchCheckFill/>
        <h4>Clinical Medicine and Basic Surgical Skills</h4>
       <small className='text-light'>Experienced</small>
        </article>

    
    
    
       <article className='experience_details'>
        <BsPatchCheckFill/>
        <h4>Research Writing</h4>
       <small className='text-light'>Experienced</small>
        </article>

        <article className='experience_details'>
        <BsPatchCheckFill/>
        <h4>Article Writing</h4>
       <small className='text-light'>Experienced</small>
        </article>

    

        <article className='experience_details'>
        <BsPatchCheckFill/>
        <h4>Ebooks Writing and Design</h4>
       <small className='text-light'>Experienced</small>
        </article>


        <article className='experience_details'>
        <BsPatchCheckFill/>
        <h4>Clinical Medicine and Basic Surgical Skills</h4>
       <small className='text-light'>Experienced</small>
        </article>

     </div>

      </div>
     
     </div>
    </section>
  )
}

export default Experience