import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { Home } from './pages/Home'
import { Details } from './pages/Details'

import './styles/Details.css'
import './styles/Home.css'

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemon/:id' element={<Details />} />
    </Routes>
  )
}