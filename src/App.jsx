import React from 'react'
import App from './App'
import About from './components/about/about'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
    </>
  )
}

export default App