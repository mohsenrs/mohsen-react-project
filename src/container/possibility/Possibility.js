import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Lorem ipsum dolor sit.</h4>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
          sint odit quasi? Ab, qui.
        </p>
        <h4>Lorem ipsum dolor sit.</h4>
      </div>
    </div>
  )
}

export default Possibility
