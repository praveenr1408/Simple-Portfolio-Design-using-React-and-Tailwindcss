import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
    </>
  )
}

export default App
