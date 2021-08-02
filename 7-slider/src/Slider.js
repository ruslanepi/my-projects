import React from 'react'

const Slider = ({ image, name, title, quote }) => {
  return (
    <article>
      <img src={image} alt={name} className='person-img' />
      <h4>{name}</h4>
      <h3>{title}</h3>
      <p>{quote}</p>
    </article>
  )
}

export default Slider
