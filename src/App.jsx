import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Fonts_Sizes from './components/Fonts_Sizes'
import Marginpadding from './components/Marginpadding'
import Responsive from './components/Responsive'

const App = () => {
  return (
    <>
          <Navbar />
          <Body />
          <Fonts_Sizes />
          <Marginpadding />
          <Responsive />
    </>
  )
}

export default App
