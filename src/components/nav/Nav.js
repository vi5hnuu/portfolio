import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return <nav>
    <a
      href='#'
      className={activeNav === '#' ? 'active' : ''}
      onClick={() => { setActiveNav('#') }}
    >
      <AiOutlineHome />
    </a>
    <a
      href='#about'
      className={activeNav === '#about' ? 'active' : ''}
      onClick={() => { setActiveNav('#about') }}
    >
      <AiOutlineUser />
    </a>
    <a
      href='#experience'
      className={activeNav === '#experience' ? 'active' : ''}
      onClick={() => { setActiveNav('#experience') }}
    >
      <BsFillJournalBookmarkFill />
    </a>
    <a
      href='#services'
      className={activeNav === '#services' ? 'active' : ''}
      onClick={() => { setActiveNav('#services') }}
    >
      <RiServiceLine />
    </a>
    <a
      href='#contact'
      className={activeNav === '#contact' ? 'active' : ''}
      onClick={() => { setActiveNav('#contact') }}
    >
      <AiOutlineMessage />
    </a>
  </nav>
}

export default Nav