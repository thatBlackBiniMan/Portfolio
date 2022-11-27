import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/t1.jpeg';
import AVTR2 from '../../assets/t2.jpeg';
import AVTR3 from '../../assets/t3.jpg';
import AVTR4 from '../../assets/t4.jpeg';


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sarah James',
    review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rerum reiciendis autem natus quia delectus ullam facilis esse deleniti. Laborum',
  },  {
    avatar: AVTR2,
    name: 'Mark Greg',
    review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rerum reiciendis autem natus quia delectus ullam facilis esse deleniti. Laborum',
  }, {
    avatar: AVTR4,
    name: 'Paul Cole',
    review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rerum reiciendis autem natus quia delectus ullam facilis esse deleniti. Laborum',
  }, {
    avatar: AVTR3,
    name: 'Rita Lee',
    review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rerum reiciendis autem natus quia delectus ullam facilis esse deleniti. Laborum',
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testimonials</h2>

  <Swiper  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}   
      className="container testimonials_container">
    {
      data.map(({avatar, name, review}, index)=>{
        return (
   <SwiperSlide key={index} className="testimonial">
     <div className="client_avatar">
      <img src={avatar} alt="" />
     </div>  
     <h5 className='client_name'>{name}</h5>
      <small className='client_review'>
      {review}  
      </small>

    </SwiperSlide>
 
        )
      })
    }
    
     </Swiper>


    </section>
  )
}

export default Testimonials