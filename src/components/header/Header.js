import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from './../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return <header>
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Vishnu Kumar</h1>
      <h5 className='text-light'>Fullstack Web Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className='me'>
        <img src={ME} />
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
  </header>
}

export default Header