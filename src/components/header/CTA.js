import React from 'react'
import './CTA.css'
import cv from './../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={cv} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA