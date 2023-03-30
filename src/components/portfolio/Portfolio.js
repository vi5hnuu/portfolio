import React from 'react'
import './Portfolio.css'
import IMG1 from './../../assets/portfolio1.jpg'
import IMG2 from './../../assets/portfolio2.jpg'
import IMG3 from './../../assets/portfolio3.jpg'
import IMG4 from './../../assets/portfolio4.jpg'
import IMG5 from './../../assets/portfolio5.png'
import IMG6 from './../../assets/portfolio6.jpg'

const portfolios = [
  {
    id: 1,
    image: IMG1,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Figma dashboard UI kit',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 7,
    image: IMG1,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  }
]

function Portfolio() {
  return <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
      {portfolios.map((portfolio) => {
        return <article id={portfolio.id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio.image} alt={portfolio.title} />
          </div>
          <h3>{portfolio.title}</h3>
          <div className='portfolio-cta'>
            <a
              href={portfolio.github}
              className='btn'
              target='_blank'>Github</a>
            <a
              href={portfolio.demo}
              className='btn btn-primary'
              target='_blank'>Live Demo</a></div>
        </article>
      })}
    </div>
  </section>
}

export default Portfolio