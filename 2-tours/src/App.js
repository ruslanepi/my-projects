import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  const fetchTours = () => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => setTours(response.data))
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false)
        console.log(error)
        throw new Error('error load a data')
      })
  }

  const deleteItem = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id
    })

    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} deleteItem={deleteItem} />
    </main>
  )
}

export default App
