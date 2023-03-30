import React from 'react'
import { TbCheck } from 'react-icons/tb'
import './Services.css'

function Services() {
  return <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX DESIGN</h3>
        </div>
        <ul className='service__list'>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
        </ul>
      </article>
      <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
        </ul>
      </article>
      <article className='service'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
          <li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li><li>
            <TbCheck className='check_icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </li>
        </ul>
      </article>
    </div>
  </section>
}

export default Services