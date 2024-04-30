import React from 'react'
import { FaUserCircle} from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Login.css'
const Login = () => {
  return (
    <>
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
          <button type='submit'> Login </button>
          
          <div className='forget-password'>
            <a className='forget-password' href="/"> Forgot Password?</a> 
          </div>
          <div className='register'> Don't have an account ? <a className="register1" href="/">Register </a></div>
        </form>
      </div>
    </>
  )
}

export default Login