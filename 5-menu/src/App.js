import items from './data'
import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'

// const allCategories = items.map((item) => item.category)
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (activeCategory) => {
    if (activeCategory === 'all') {
      setMenuItems(items)
      return
    }
    const sortedItems = items.filter((item) => {
      return item.category === activeCategory
    })
    setMenuItems(sortedItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
