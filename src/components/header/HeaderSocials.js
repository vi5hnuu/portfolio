import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsMedium } from 'react-icons/bs'
import './HeaderSocials.css'

function HeaderSocials() {
  return <div className='header_socials'>
    <a
      href='https://linkedin.com'
      target='_blank'>
      <BsLinkedin className='social_icon' />
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
}

export default HeaderSocials