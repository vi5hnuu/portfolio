import React from 'react'
import { MdVerified } from 'react-icons/md'
import './Experience.css'

function Experience() {
  return <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>Html</h4>
            <small className='experience__level'>Experienced</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>Css</h4>
            <small className='experience__level'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>Javascript</h4>
            <small className='experience__level'>Experienced</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>React</h4>
            <small className='experience__level'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>Sass</h4>
            <small className='experience__level'>Beginner</small>
          </article>
        </div>
      </div>
      <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>Node.js</h4>
            <small className='experience__level'>Experienced</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>MongoDB</h4>
            <small className='experience__level'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>MySql</h4>
            <small className='experience__level'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>PostGres</h4>
            <small className='experience__level'>Beginner</small>
          </article>
          <article className='experience__details'>
            <MdVerified className='verify_icon' />
            <h4>Python</h4>
            <small className='experience__level'>Intermediate</small>
          </article>
        </div>
      </div>
    </div>
  </section>
}

export default Experience