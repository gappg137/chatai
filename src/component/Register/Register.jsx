import React, { useState } from 'react'
import { FaUserCircle} from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
import './Register.css'
import ChatAINavBar from '../Navbar/Navbar';
import { FaInfoCircle, FaLock, FaUser } from 'react-icons/fa'








const Register = () => {

  const [username,setUsername] = useState()
  const [pwd, setPwd] = useState()


  const submitForm = () => 
  {
      console.log(username + '' +pwd)

  }
  return (
    <><ChatAINavBar/>
    <div className="wrapper">
    <form action="">
          <h1>NewRegister</h1>
          <div className="input-box1"> 
          <input className= 'usr1' type='text' placeholder='Username' required     
          
          /> 
          <FaUser className='icon1'/>
          </div>

          <div className="input-box1">
            <input className='pwd1' type="password" placeholder='Password' required/>
            <FaLock className='icon1'/>
          
          </div>

          <div className="input-box1">
            <input className='pwd2' type="password" placeholder='Re-Password' required/>
            <FaLock className='icon1'/>
          
          </div>
          <button type='submit'> Register </button>
          
          
        </form>
      </div>

      
    </>
  )
}


export default Register