import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.png'
import IMG6 from '../../assets/p6.jpeg'



const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Blog App in Next js and Tailwind Css',
    github: 'https://github.com',
    demo: 'https://village-men.vercel.app/'
  },  {
    id: 2,
    image: IMG1,
    title: 'Articles & Research',
    github: 'https://github.com',
    demo: 'https://village-men.vercel.app/'
  }, {
    id: 3,
    image: IMG5,
    title: 'Nft Marketplace with React, Tailwnd & Solidity',
    github: 'https://github.com',
    demo: 'https://village-men.vercel.app/'
  }, {
    id: 4,
    image: IMG4,
    title: 'Nft Minting App with React, Tailwnd & Solidity',
    github: 'https://github.com',
    demo: 'https://village-men.vercel.app/'
  }, {
    id: 5,
    image: IMG3,
    title: 'E-books',
    github: 'https://github.com',
    demo: 'https://village-men.vercel.app/'
  }, {
    id: 6,
    image: IMG6,
    title: 'Payment system smart contracts with Solidity',
    github: 'https://github.com',
    demo: 'https://village-men.vercel.app/'
  }
]








const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    
    
    <div className="container portfolio_container">
    {
      data.map(({id, image, title, github, demo})=>{
      return(
        <article key={id} className="portfolio_item">
        <div className="portfolio_item-image">
         <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      )

      })
        }

    </div>
   </section>
  )
}

export default Portfolio