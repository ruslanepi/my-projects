import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, deleteItem }) => {
  return (
    <section>
      <div className='title'>
        <h2>out tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteItem={deleteItem} />
        })}
      </div>
    </section>
  )
}

export default Tours
