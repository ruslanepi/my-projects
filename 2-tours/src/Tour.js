import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, deleteItem }) => {
  const [readMore, setReadMore] = useState(false)
  const [btnText, setBtnText] = useState('read more')

  const toggleInfo = () => {
    setReadMore((prev) => !prev)
    setBtnText((prev) => {
      return prev === 'read more' ? 'show less' : 'read more'
    })
  }
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4> {name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => toggleInfo(true)}>{btnText}</button>
        </p>
        <button className='delete-btn' onClick={() => deleteItem(id)}>
          not intersted
        </button>
      </footer>
    </article>
  )
}

export default Tour
