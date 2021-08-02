import React, { useState, useEffect } from 'react'
import Slider from './Slider'
import data from './data'

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [people, setPeople] = useState(data)

  useEffect(() => {
    const lastIndex = people.length - 1

    if (activeSlide < 0) {
      setActiveSlide(lastIndex)
    }

    if (activeSlide > lastIndex) {
      setActiveSlide(0)
    }
  }, [activeSlide, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveSlide(activeSlide + 1)
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [activeSlide])

  return (
    <section className='section '>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, title, quote, name } = person

          let position = 'nextSlide'
          if (personIndex === activeSlide) {
            position = 'activeSlide'
          }
          if (
            personIndex === activeSlide - 1 ||
            (activeSlide === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
            </article>
          )
        })}

        {/* <Slider {...people[activeSlide]} /> */}
        <div className='butn-container'>
          <button
            onClick={() => setActiveSlide(activeSlide - 1)}
            className='prev'
          >
            «
          </button>
          <button
            className='next'
            onClick={() => setActiveSlide(activeSlide + 1)}
          >
            »
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
