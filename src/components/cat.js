import React from 'react'
import './cat.css'

const Cat = ({
  index,
  name,
  picture,
  age,
  breed
}) => (
  <div className='cat-details' key={ index }>
    <img className='cat-img' src={ picture } />
    <div className='cat-name'>{ name }</div>
    <div className='cat-age'>{ age }</div>
    <div className='cat-breed'>{ breed }</div>
  </div>
)

export default Cat
