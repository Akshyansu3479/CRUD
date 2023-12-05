import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './Components/Read'
import Update from './Components/Update'
import Create from './Components/Create'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/read/:id' element = {<Read/>} />
      <Route path='/update/:id' element = {<Update/>} />
      <Route path='/create' element = {<Create/>} />
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

