import React, { useRef, useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import './Register.css'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'

const Register = () => {
  const userRef =useRef();
  const errRef =useRef();

  const [user,setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false)

  
  const [pwd,setPwd]= useState('');
  const [validPwd,setValidPwd] = useState(false)
  const [pwdFocus,setPwdFocus] = useState(false)


  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  return (


    <div className='pageregister'>


<form action="">
          <h1>Register</h1>
          <div className="input-box1"> 
          <input className= 'usr1' type='text' placeholder='Username' required /> 
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
  )
}

export default Register