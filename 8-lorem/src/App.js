import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (count > 0) {
      let amount = data.slice(0, count)
      setText(amount)
    } else {
      let amount = data.slice(0, 1)
      setText(amount)
    }
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate lorem
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
