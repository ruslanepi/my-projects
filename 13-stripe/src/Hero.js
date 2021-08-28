import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for th internet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            facilis sed nulla sit eveniet porro, voluptatem quo aperiam debitis
            nihil odit totam fugit rerum quisquam cum? Eos odit quisquam
            eligendi?
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='' />
        </article>
      </div>
    </section>
  )
}

export default Hero
