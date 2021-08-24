import React from 'react'
import logo from './logo.svg'

import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'show-sidebar sidebar ' : 'sidebar '}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='codding addict' />
        <button className='close-btn' onClick={closeSidebar}>
          close
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text } = link
          return (
            <li key={id} className='link'>
              <a href={url}>{text}</a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id} className='link'>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
