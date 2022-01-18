import React from 'react'
import { google, slack, dropbox, atlassian, shopify } from './imports'
import './brand.css'

function Brand() {
  return (
    <div className='gpt3__brand section__pading'>
      <div>
        <img src={google} alt='' />
      </div>
      <div>
        <img src={slack} alt='' />
      </div>
      <div>
        <img src={atlassian} alt='' />
      </div>
      <div>
        <img src={shopify} alt='' />
      </div>
      <div>
        <img src={dropbox} alt='' />
      </div>
    </div>
  )
}

export default Brand
