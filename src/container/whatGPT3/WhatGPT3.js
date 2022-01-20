import React from 'react'
import './whatGPT3.css'
import Feature from './../../components/feature/Feature'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='lorem ipsum' text='lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='lorem ipsum' text='lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit' />
        <Feature title='lorem ipsum' text='lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit' />
        <Feature title='lorem ipsum' text='lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit' />
      </div>
    </div>
  )
}

export default WhatGPT3
