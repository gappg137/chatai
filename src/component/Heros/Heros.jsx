import React, { useState } from 'react'
import './Heros.css'
import { FaUserCircle} from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { Link } from 'react-router-dom'
import { Signup } from '../signup/Signup'
import Signin from '../signin/Signin'

const Heros = () => {
  const [sin,setsined] = useState(false)
  const [su,setsuped] = useState(false)
  return (
    <div className='MainHero'>
      <div className='welcome'><h1>Welcome to ChatAI</h1></div>
      
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box"> 
          <input className= 'usr'type='text' placeholder='Username' required /> 
          <FaUserCircle className='icon1'/>
          </div>

          <div className="input-box">
            <input className='pwd' type="password" placeholder='Password' required/>
            <FaLock className='icon2'/>
          
          </div>

          <div className='forget-password'>
            <a className='forget-password' href="/"> Forgot Password </a> 
          </div>
          <button className='login'> Login </button>
          <div className='register'> Don't have an account ? <a className="register1" href="/">Register </a></div>
        </form>
      </div>
    </div>

  )
}


//    <a href='/signup'></a> 
//    <a href='/signin'></a>

export default Heros