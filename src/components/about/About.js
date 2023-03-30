import React from 'react'
import ME from './../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './About.css'

function About() {
  return <section id='about' className='about'>
    <h5>Get To Know</h5>
    <h2>About ME</h2>
    <div className='container about_container'>
      <div className='about_me'>
        <img src={ME} />
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <BsAward className='about_icon' />
            <h5>Experience</h5>
            <small>3+ Years Working </small>
          </article>
          <article className='about__card'>
            <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>300+ Clients World Wide </small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about_icon' />
            <h5>Project</h5>
            <small>80+ Completed Projects </small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis tincidunt nisi nec consequat. Aliquam pulvinar lacinia sapien vel vehicula. Vivamus fermentum dictum risus eget dignissim. Curabitur blandit hendrerit congue.</p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
}

export default About