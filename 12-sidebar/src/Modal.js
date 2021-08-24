import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div className={isModalOpen ? 'show-modal modal-overlay' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          close
        </button>
      </div>
    </div>
  )
}

export default Modal
