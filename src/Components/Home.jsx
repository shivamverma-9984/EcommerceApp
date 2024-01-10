import React from 'react'
import Hero from '../Pages/Hero'
import Products from '../Pages/Products'
import Contact from '../Pages/Contact'
import Topdeal from './../Pages/Topdeal';
function Home() {
  return (
    <div className= "bg-gradient-to-r from-rose-100 to-teal-100">
    
      <Hero/>
      <Topdeal/>
      <Products/> 
      <Contact/>
    </div>
  )
}

export default Home
