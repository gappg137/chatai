import React, { useState } from 'react'
import './Heros.css'
import { Link } from 'react-router-dom'
import { Signup } from '../signup/Signup'
import Signin from '../signin/Signin'

const Heros = () => {
  const [sin,setsined] = useState(false)
  const [su,setsuped] = useState(false)
  return (
    <div className='MainHero'>
      <div className='welcome'><h1>Welcome to ChatAI</h1></div>
    <div className='Sign-Up'><button className='a1' onClick={() => setsined(!sin)}>Sign-up</button>
    {sin && <Signup/>}
    
    </div>
    <div className='Sign-In'><button className='a2' onClick={() => setsuped(!su)}>Sign-in</button>
    
    {su && <Signin/>}
    </div>
    </div>

  )
}


//    <a href='/signup'></a> 
//    <a href='/signin'></a>

export default Heros