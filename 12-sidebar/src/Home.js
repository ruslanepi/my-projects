import React from 'react'
import { useGlobalContext } from './context'
const Home = () => {
  const { openModal, openSidebar } = useGlobalContext()

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        menu
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
