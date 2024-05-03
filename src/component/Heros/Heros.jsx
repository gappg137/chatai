import React, { useState } from 'react'
import './Heros.css'


import { Link } from 'react-router-dom'
import { Signup } from '../signup/Signup'
import Signin from '../signin/Signin'
import Login from '../Login/Login';
import Register from '../Register/newRegister'


const Heros = () => {
  const [sin,setsined] = useState(false)
  const [su,setsuped] = useState(false)
  const [reg,setreg] = useState(false)
  const [renderPage,setRenderPage] = useState(true)
  // var renderPage=false;
  if(renderPage){
  return (
    <div className='MainHero'>
      <div className='welcome'><h1>Welcome to ChatAI</h1></div>
      <div className='subword'><h3>Where everything gets Breezy!</h3></div>
      
          < Login/>
    </div>

  )
}else{
  return (
    <div className='MainHero'>
      <div className='welcome'><h1>Welcome to ChatAI</h1></div>
      <div className='subword'><h3>Where everything gets Breezy!</h3></div>
    
          <Register/>
    </div>

  )
}
}

//    <a href='/signup'></a> 
//    <a href='/signin'></a>

export default Heros