import React from 'react'
import { Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Fpwd from '../Fpwd/Fpwd'

const Route = () => {
  return (
    <div>
    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgetpwd" element={<Fpwd/>}    />
    </Routes>

    </div>
  )
}

export default Route