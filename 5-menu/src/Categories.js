import React from 'react'

const Categories = ({ categories, filterItems }) => {
  console.log(categories)
  return (
    <div className='btn-container'>
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => {
              console.log(item)
              return filterItems(item)
            }}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
