import React from 'react'
import { Rimenu3Line, RiCloseLine } from 'react-icons/ri'
import './navabr.css'

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
