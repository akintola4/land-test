import { useState } from 'react'

import './App.css'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Footer from './Component/Footer'
function App() {

  return (
    <div className=''>
       <Nav />
       <section>
        <Hero />
       </section>
       <Footer />
    </div>
   
  )
}

export default App
