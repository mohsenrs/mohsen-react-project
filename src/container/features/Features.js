import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'lorem ipsum dolor',
    text: 'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
  },
  {
    title: 'lorem ipsum dolor',
    text: 'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
  },
  {
    title: 'lorem ipsum dolor',
    text: 'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
  },
  {
    title: 'lorem ipsum dolor',
    text: 'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit ',
  },
]

function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nesciunt quasi, officiis laborum dolorum perspiciatis!
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
