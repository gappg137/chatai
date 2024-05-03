import React, { useState } from 'react'
import { FaUserCircle} from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Login.css'


const Login = () => {

  const [username,setUsername] = useState()
  const [pwd, setPwd] = useState()


  const submitForm = () => 
  {
      console.log(username + '' +pwd)

  }
  return (
    <>
    <div className="wrapper">
        <form action="" >
          <h1>Login</h1>
          <div className="input-box"> 
          <input className= 'usr'type='text' placeholder='Username' required onChange={e=>
            setUsername(e.target.value)
          }/> 
          <FaUserCircle className='icon1'/>
          </div>

          <div className="input-box">
            <input className='pwd' type="password" placeholder='Password' required 
            
            onChange={ e=>setPwd(e.target.value)}
            />
            <FaLock className='icon2'/>
          
          </div>
          <button type='submit' onClick={submitForm}> Login </button>
          
          <div className='forget-password'>
            <a className='forget-password' href="/forgetpwd"> Forgot Password?</a> 
          </div>
          <div className='register'> Don't have an account ? <a className="register1" href="/register">Register </a></div>
        
        
        </form>
      </div>

      
    </>
  )
}


export default Login