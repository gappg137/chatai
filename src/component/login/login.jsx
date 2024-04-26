import React from 'react'

export const Login = () => {
  return (
    <div>
        
        
        <form className='addUerForm'>
        <h1>Hello Good Afternoon</h1>
        <div>
            <label htmlFor='email'>email:</label>
    <input  type='email' placeholder='enter mail id'></input></div>
    
    <div> 
    <label htmlFor='password'>password:</label>
    <input  type='password'  placeholder='enter password'></input>
    </div>

    </form>
    </div>
   
  )
}

