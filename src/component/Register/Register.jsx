import React from 'react'

const Register = () => {
  return (
    <div className='register'>


<form action="">
          <h1>Register</h1>
          <div className="input-box"> 
          <input className= 'usr'type='text' placeholder='Username' required /> 
          <FaUserCircle className='icon1'/>
          </div>

          <div className="input-box">
            <input className='pwd' type="password" placeholder='Password' required/>
            <FaLock className='icon2'/>
          
          </div>

          <div className="input-box">
            <input className='pwd' type="password" placeholder='Re-Password' required/>
            <FaLock className='icon2'/>
          
          </div>
          <button type='submit'> Register </button>
          
          
        </form>

    </div>
  )
}

export default Register