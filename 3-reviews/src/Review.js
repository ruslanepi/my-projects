import React, { useState } from 'react'

import people from './data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkPerson = (index) => {
    if (index > people.length - 1) {
      return 0
    }
    if (index < 0) {
      return people.length - 1
    }
    return index
  }

  const prevPerson = () => {
    setIndex((prev) => {
      let newItem = prev - 1
      return checkPerson(newItem)
    })
  }

  const nextPerson = () => {
    setIndex((prev) => {
      let newItem = prev + 1
      return checkPerson(newItem)
    })
  }

  const randomPerson = () => {
    let randomPerson = Math.floor(Math.random() * people.length)
    if (randomPerson === index) {
      randomPerson = index + 1
    }
    setIndex(randomPerson)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          prev
        </button>
        <button className='next-btn' onClick={nextPerson}>
          next
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
