import React from 'react'
import { Routes } from 'react-router-dom'
import Home from '../Home/Home'

const Route = () => {
  return (
    <div>
    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>

    </div>
  )
}

export default Route