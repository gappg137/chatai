import React, { useEffect, useState } from 'react';
import { FaUserCircle} from "react-icons/fa";
import { FaLock,FaUser } from "react-icons/fa";
import './Login.css'
import '../Register/Register.css'
import '../Fpwd/Fpwd.css'
import Loader from '../Loader/Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ onRegisterClick,onPasswordChangeClick  }) => {
    const [username1,setUsername] = useState('')
    const [pwd1, setPwd] = useState('')
    const submitForm = () => 
        {
            console.log(username1 + '' +pwd1)
      
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

    const [username,setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    
    const [formData,setData] = useState(
      {
        usrname:'',
        password:'',
        repassword:''

      }
    );

    const [errors,setError] = useState({});
    // const handleChange=(e) => {
    //    setData({...formData,[e.target.name]:e.target.value})
    // };


    const handleUsernameChange = (e) => {
          setData({...formData,usrname:e.target.value})
          console.log(e.target.value);
          
    }

    const handlePwdChange = (e) => {
          setData({...formData,password:e.target.value})
          //console.log(e.target.value);
    }

    const handleRePwdChange = (e) => {
          setData({...formData,repassword:e.target.value})
          //console.log(e.target.value);
        }
    const validatePassword=() => {
      const[password,repassword]=formData;
      const errors = {};

      if(password !== repassword)
        {
          toast.error("Passwords do not match");
          return false;
        }

      const passwordRegex=/^(?=.*\d)(?=.*[a-z](?=.*[A-Z])(?=.*[^a-zA-Z0-9]))/;

      if(!passwordRegex.test(password))
        {
          toast.error("Password must contain atleast 8 characters including one uppercase letter, one lowercase letter, one number, and special character");
          return  false; 
        }
        //setError(errors);
        //return Object.keys(errors).length===0;
        return true;
    }

    const handleSubmit = async (e) => {


    // if (e)
    //   alert("HI")
      //e.preventDefault();

      if(validatePassword)
        {
          try {
            
            await axios.post("http://localhost:8083/x/api",  {
              username:formData.usrname,
              password:formData.password
          });
          console.log("Registration Successful");

          } catch (error) {
          console.log("Registration failed",error);            
          }
        }
    }

    const submitForm = () => 
    {
        console.log(username + '' +pwd)
  
    }
  return (
    <div className="register" >


<form action=''>
          <h1>New Register</h1>
          <div className="input-box1"> 
          <input className= 'usr1' name='username' onChange={handleUsernameChange} value={formData.usrname} type='text' placeholder='Username'  required/> 
          <FaUser className='icon1'/>
          </div>

          <div className="input-box1">
            <input className='pwd1' type="password" onChange={handlePwdChange} value={formData.password} placeholder='Password'   required/>
             <FaLock  className='icon1'/>

          </div>

          <div className="input-box1">
            <input className='pwd2' type="password" onChange={handleRePwdChange} value={formData.repassword} placeholder='Re-Password'  required />
           <div className='icon1'> <FaLock /></div>

          </div>
          <button  type='submit' onClick={handleSubmit}> Register </button>
        </form>
        <ToastContainer/>
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay to hide the loader after some time (e.g., 3 seconds)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // Clean up the timer
      return () => clearTimeout(timer);
    }, []);
  
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
        {/* {showLogin && <Login onRegisterClick={handleRegisterClick} onPasswordChangeClick={handlePasswordChangeClick} />}
        {showRegister && <Register onLoginClick={handleLoginClick} />}
        {showPasswordChange && <PasswordChangeForm onLoginClick={handleLoginClick} />} */}
        {loading ? <Loader /> :showLogin && <Login onRegisterClick={handleRegisterClick} onPasswordChangeClick={handlePasswordChangeClick} />}
        {loading ? <Loader /> :showRegister && <Register onLoginClick={handleLoginClick} />}
        {loading ? <Loader /> :showPasswordChange && <PasswordChangeForm onLoginClick={handleLoginClick} />}
      </div>
    );
  };

export default LoginPage;
