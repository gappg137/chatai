import React from 'react';
import Home from '../Home/Home';
import './signup.css'
//<div className='Sign-In'><button className='signin'>Sign in</button></div>

export const Signup = () => {
  return (
    <div>
        <div className='signupform'>
            <form action="">

                <h1>Signup</h1>
                <div className='ipbox'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='password'>
                    <input type="Password" placeholder='password' required />
                </div>

                <div className='repassword'>
                    <input type="password" placeholder='Retype-password' required/>

                </div>

                <div className='back'> 
                <a href='/'>Back to Home</a>
                </div>
                <button type='submit'>Login </button>
                
            </form>
            
    </div>
    </div>
  )
}

//export default Signup;
//<div className='Sign-Up'><a href='/signup'>Sign-up</a></div>
          