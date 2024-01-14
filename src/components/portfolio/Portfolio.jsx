import React from 'react'
import './portfolio.css'
import fly from '../../assests/flyease.png'
import emp from '../../assests/empowerPro.jpg'
import med from '../../assests/medbot.png'
const data=[
  {
    id: 1,
    image: emp,
    title: 'EmpowerPro',
    github: "https://github.com/Rishabh-Saket/EmpowerPro"
  },
  {
    id: 2,
    image: fly,
    title: 'FlyEase',
    github: "https://github.com/Rishabh-Saket/FlyEase"
  },
  {
    id: 3,
    image: med,
    title: 'Medbot',
    github: "https://github.com/Rishabh-Saket/Medbot"
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