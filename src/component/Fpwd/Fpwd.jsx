import React from 'react'
import { FaLock, FaUserCircle } from 'react-icons/fa'

const Fpwd = () => {
  return (
    <div>
        
        <div className='forgotpassword'>

<form action="">
          <h1>Enter present Username</h1>
          <div className="inputuserfpwd"> 
          <input className= 'userfpwd' type='text' placeholder='Enter Username' required /> 
          <FaUserCircle className='icon1'/>
          </div>

          <div className="inputuserfpwd">
            <input className='fpwd' type="password" placeholder='Password' required/>
            <FaLock className='icon2'/>
          
          </div>

          <div className="input-box">
            <input className='fpwd' type="password" placeholder='ReEnter Password' required/>
            <FaLock className='icon2'/>
          
          </div>
          <button type='submit'>Submit</button>
          
          
        </form>

    </div>

    </div>
  )
}

export default Fpwd