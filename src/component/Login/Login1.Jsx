import React from 'react'

const Login = ({ onRegisterClick }) => {
    return (
      <div>
        <h2>Login</h2>
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
          <div className='register'> Don't have an account ? <a className="register1" href="/Nregister">Register </a></div>
        
        
        </form>
        <p>
          Don't have an account? <button onClick={onRegisterClick}>Register</button>
        </p>
      </div>
    );
  };





export const Login1 = () => 

  return (
    <div>Login1</div>
  )
}
