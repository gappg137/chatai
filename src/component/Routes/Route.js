import React from 'react'
import { Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Fpwd from '../Fpwd/Fpwd'
import NewRegister from '../Register/NewRegister'

const Route = () => {
  return (
    <div>
    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgetpwd" element={<Fpwd/>}    />
        <Route path="/Nregister" element={<NewRegister/>}/>
    </Routes>

    </div>
  )
}

export default Route