import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Get Started</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_image'>
          <img src={gpt3Logo} alt='gpt3 logo' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
