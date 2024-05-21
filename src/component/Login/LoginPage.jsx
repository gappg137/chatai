import React, { useState } from 'react';
import { FaUserCircle} from "react-icons/fa";
import { FaLock,FaUser } from "react-icons/fa";
import './Login.css'
import '../Register/Register.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ onRegisterClick }) => {
    // const [username,setUsername] = useState()
    // const [pwd, setPwd] = useState()
    // const submitForm = () => 
    //     {
    //         console.log(username + '' +pwd)
      
    //     }



  return (
    <div className='wrapper'>


<form action='' >
          <h1>Login</h1>
          <div className="input-box"> 
          <input className= 'usr' 
          type='text' placeholder='Username' 
          required /> 
          <FaUserCircle className='icon1'/>
          </div>

          <div className="input-box">
            <input className='pwd' type="password" placeholder='Password' required 
            
             />
           
                    <FaLock className='icon2'/>

          </div>
          <button type='submit' > Login </button>
</form>
<div className='forget-password'>
            <a className='forget-password' href="/forgetpwd"> Forgot Password?</a> 
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

const Register = () => {

    // const [username,setUsername] = useState()
    // const [pwd, setPwd] = useState()

  
    const [state, setState] = useState({
      username: "",
      password: "",
      repassword: ""
    });



    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setState((prevProps) => ({
        ...prevProps,
        [name]: value
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      if(!state.username)
        {
          toast.error('Username is required');
        }
  
      console.log(state);
    };




  return (
    <div className="register" >

<ToastContainer/>

<form onSubmit={handleSubmit}>
          <h1>New Register</h1>
          <div className="input-box1"> 
          <input className= 'usr1' type='text' 
          placeholder='Username' 
          value={state.username}
          onChange={handleInputChange}
          
          /> 
          <FaUser className='icon1'/>
          </div>

          <div className="input-box1">
            <input className='pwd1' type="password"
             placeholder='Password' 
             value={state.password}
             onChange={handleInputChange}
             />
             <FaLock  className='icon1'/>
          
          </div>

          <div className="input-box1">
            <input className='pwd2' type="password"
            placeholder='Re-Password' 
            value={state.repassword}
            onChange={handleInputChange}
            />
           <div className='icon1'> <FaLock /></div>
          
          </div>
          <button  type='submit'> Register </button>
          

        </form>

        <span className='s1'> Back to home <a className="register1" href='/' >Home </a></span>

      {/* <h2>Register</h2> */}
      {/* Your registration form here */}
    </div>
  );
};

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <div>
      {showRegister ? (
        <Register />
      ) : (
        <Login onRegisterClick={handleRegisterClick} />
      )}
    </div>
  );
};

export default LoginPage;