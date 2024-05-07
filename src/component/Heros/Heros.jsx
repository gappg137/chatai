import React, { useState } from 'react'
import './Heros.css'


import { Link } from 'react-router-dom'
import { Signup } from '../signup/Signup'
import Signin from '../signin/Signin'
import Login from '../Login/Login';
import NewRegister from '../Register/NewRegister'
import LoginPage from '../Login/LoginPage'
import Loader from '../Loader/Loader'


const Heros = () => {
  const [sin,setsined] = useState(false)
  const [su,setsuped] = useState(false)
  const [reg,setreg] = useState(false)
  //const [renderPage,setRenderPage] = useState(true)
  // var renderPage=false;
  const [renderPage, setRenderPage] = useState(true);

  const handleLoginClick = (value) => {
    console.log('Clicked value from Login:', value);
    // You can perform further actions here based on the clicked value
    // For example, conditionally render different components
    setRenderPage(!renderPage);
  };
  
  return (
    <div className='MainHero'>
      <div className='welcome'><h1>Welcome to ChatAI</h1></div>
      <div className='subword'><h3>Where everything gets Breezy!</h3></div>
       <LoginPage /> 
       <Loader/>
    </div>
  );


}


export default Heros