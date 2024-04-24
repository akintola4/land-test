import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Main from './Component/Main'

function App() {

  return (
    <div className='bg-white dark:bg-gray-900'>
    <Nav />
    <section className='pt-32 bg-white dark:bg-gray-900'>
      <Hero />
      <Main />
    </section>
    <Footer />
    </div>
  )
}

export default App
