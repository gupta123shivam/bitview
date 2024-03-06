import React from 'react'
import { Footer, Hero, JoinUs, Market, WhyUs } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Market />
      <JoinUs />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default Home
