import React, { useState } from 'react';
import { FaUserCircle} from "react-icons/fa";
import { FaLock,FaUser } from "react-icons/fa";
import './Login.css'
import '../Register/Register.css'
import '../Fpwd/Fpwd.css'

const Login = ({ onRegisterClick,onPasswordChangeClick  }) => {
    const [username,setUsername] = useState()
    const [pwd, setPwd] = useState()
    const submitForm = () => 
        {
            console.log(username + '' +pwd)
      
        }
  return (
    <div className='wrapper'>


<form action="" >
          <h1>Login</h1>
          <div className="input-box"> 
          <input className= 'usr' type='text' placeholder='Username' required onChange={e=>
            setUsername(e.target.value)
          }/> 
          <FaUserCircle className='icon1'/>
          </div>

          <div className="input-box">
            <input className='pwd' type="password" placeholder='Password' required 
            
            onChange={ e=>setPwd(e.target.value)} />
           
                    <FaLock className='icon2'/>

          </div>
          <button type='submit' onClick={submitForm}> Login </button>
</form>
<div className='forget-password'>
            <a className='forget-password' onClick={onPasswordChangeClick}> Forgot Password?</a> 
          </div>
          <div > Don't have an account ? <a className="register1" onClick={onRegisterClick} >Register </a></div>
      {/* <h2>Login</h2> */}
      {/* Your login form here */}
      {/* <p>
        Don't have an account? <button onClick={onRegisterClick}>Register</button>
      </p> */}
    </div>
  );
};

const Register = ({ onLoginClick }) => {

    const [username,setUsername] = useState()
    const [pwd, setPwd] = useState()
  
  
    const submitForm = () => 
    {
        console.log(username + '' +pwd)
  
    }
  return (
    <div className="register" >


<form action="">
          <h1>New Register</h1>
          <div className="input-box1"> 
          <input className= 'usr1' type='text' placeholder='Username' required/> 
          <FaUser className='icon1'/>
          </div>

          <div className="input-box1">
            <input className='pwd1' type="password" placeholder='Password' required/>
             <FaLock  className='icon1'/>
          
          </div>

          <div className="input-box1">
            <input className='pwd2' type="password" placeholder='Re-Password' required/>
           <div className='icon1'> <FaLock /></div>
          
          </div>
          <button  type='submit'> Register </button>
          

        </form>

        <span className='s1'> Back to Login <a className="register1" onClick={onLoginClick} >Login </a></span>

      {/* <h2>Register</h2> */}
      {/* Your registration form here */}
    </div>
  );
};


//login with registration and apssword is in progress



const PasswordChangeForm = ({ onLoginClick }) => {
    return (
      <div className='passwordchange'>
        <h2>Change Password</h2>
        <form action="">
          <div className="input-boxpwd"> 
          <input className= 'fpwd' type='text' placeholder='Enter present Username' required /> 
          <FaUserCircle className='icon1pwd'/>
          </div>

          <div className="input-boxpwd">
            <input className='fpwd' type="password" placeholder='Password' required/>
            <FaLock className='icon2pwd'/>
          
          </div>

          <div className="input-boxpwd">
            <input className='fpwd' type="password" placeholder='ReEnter Password' required/>
            <FaLock className='icon2pwd'/>
          
          </div>
          <button className='buttonpwd' type='submit'>Submit</button>
          
          
        </form>

        <span className='s1'>Remembered your password? <a className='s1pwd' onClick={onLoginClick} >Login </a></span>

                {/* <p>
          Remembered your password? <a onClick={onLoginClick} > Login </a>
        </p> */}
      </div>
    );
  };




const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showPasswordChange, setShowPasswordChange] = useState(false);
  
    const handleRegisterClick = () => {
      setShowLogin(false);
      setShowRegister(true);
      setShowPasswordChange(false);
    };
  
    const handleLoginClick = () => {
      setShowLogin(true);
      setShowRegister(false);
      setShowPasswordChange(false);
    };
  
    const handlePasswordChangeClick = () => {
      setShowLogin(false);
      setShowRegister(false);
      setShowPasswordChange(true);
    };
  
    return (
      <div>
        {showLogin && <Login onRegisterClick={handleRegisterClick} onPasswordChangeClick={handlePasswordChangeClick} />}
        {showRegister && <Register onLoginClick={handleLoginClick} />}
        {showPasswordChange && <PasswordChangeForm onLoginClick={handleLoginClick} />}
      </div>
    );
  };

export default LoginPage;
