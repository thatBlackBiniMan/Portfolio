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
         <BsPatchCheckFill className="experience_details_icon"/>
        <div>
        <h4>Clinical Medicine and Basic Surgical Skills</h4>
        <small className='text-light'>Experienced</small>
        </div>
         
         </article>

     
     
     
        <article className='experience_details'>
         <BsPatchCheckFill className="experience_details_icon"/>
      <div>
      <h4>Research Writing</h4>
        <small className='text-light'>Experienced</small>
      </div>
         </article>

         <article className='experience_details'>
         <BsPatchCheckFill className="experience_details_icon"/>
       <div>
        <h4>Article Writing</h4>
        <small className='text-light'>Experienced</small>
        </div>
         </article>

  
         <article className='experience_details'>
         <BsPatchCheckFill className="experience_details_icon"/>
          <div>
          <h4>Ebooks Writing and Design</h4>
        <small className='text-light'>Experienced</small>
         
          </div>
         </article>


         <article className='experience_details'>
         <BsPatchCheckFill className="experience_details_icon"/>
         <div>
         <h4>Blockchain Research & Articles</h4>
        <small className='text-light'>Experienced</small>
         
         </div>
         </article>

      </div>
      </div>
     
     
     
      <div className="experience_backend">
     <h3>Software Development</h3>
      <div className="experience_content">
     
     <article className='experience_details'>
        <BsPatchCheckFill className="experience_details_icon"/>
     <div>
     <h4>Html $ Css</h4>
       <small className='text-light'>Experienced</small>
     </div>
    </article>

    
    
    
       <article className='experience_details'>
        <BsPatchCheckFill className="experience_details_icon"/>
        <div>
        <h4>JavaScript (React, Vue, Angular)</h4>
       <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience_details'>
        <BsPatchCheckFill className="experience_details_icon"/>
        <div>
        <h4>Solidity</h4>
       <small className='text-light'>Experienced</small>
        </div>
      </article>

    

        <article className='experience_details'>
        <BsPatchCheckFill className="experience_details_icon"/>
          <div>
          <h4>Golang</h4>
       <small className='text-light'>Experienced</small>
          </div>
        </article>


        <article className='experience_details'>
        <BsPatchCheckFill className="experience_details_icon"/>
        <div>
        <h4>Database (MongoDB, MySQl)</h4>
       <small className='text-light'>Experienced</small>
        </div>
        
        </article>

     </div>

      </div>
     
     </div>
    </section>
  )
}

export default Experience