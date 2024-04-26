import React from 'react'
import './signin.css'
const Signin = () => {
  return (
    <div>
        <div className='signinform'>
            <form action="">

                <h1>Signin</h1>
                <div className='ipbox'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='password'>
                    <input type="Password" placeholder='password' required />
                </div>

                <div className='remember-forget'>
                    <label><input type="checkbox" /> Remember Me

                    </label>
                    <a href="#">Forgot Password</a>
                </div>

                <button type='submit'>Login </button>

                <a href='/'>Back to Home</a>
            </form>
    </div>



    </div>
  )
}

export default Signin