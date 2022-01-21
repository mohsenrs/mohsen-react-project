import React from 'react'
import './whatGPT3.css'
import Feature from './../../components/feature/Feature'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='lorem ipsum' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
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
