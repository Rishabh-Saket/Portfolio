import React from 'react'
import './portfolio.css'

const data=[
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  },
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  },
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  },
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  },
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  },
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  },
  {
    id: 1,
    image: "NA",
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket"
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      {
        data.map(({id,image,title,github})=> {
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt='title'/>
            </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
              <a href={github} className='btn'>Github</a>
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