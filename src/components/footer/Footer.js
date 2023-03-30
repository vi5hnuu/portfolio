import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsMedium, BsTwitter } from 'react-icons/bs'
import './Footer.css'

function Footer() {
  return <footer>
    <a href='#' className='footer__logo'>Vishnu</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a
        href='https://linkedin.com'
        target='_blank'>
        <BsLinkedin className='social_icon' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'>
        <BsTwitter className='social_icon' />
      </a>
      <a
        href='https://github.com'
        target='_blank'>
        <BsGithub className='social_icon' />
      </a>
      <a
        href='https://instagram.com'
        target='_blank'>
        <BsInstagram className='social_icon' />
      </a>
      <a
        href='https://medium.com'
        target='_blank'>
        <BsMedium className='social_icon' />
      </a>
    </div>
    <div className='footer__copyright'>
      <small>&copy;copyright 2023 (vishnu kumar)</small>
    </div>
  </footer>
}

export default Footer