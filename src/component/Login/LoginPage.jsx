import React, { useState,useRef } from 'react';
import { FaUserCircle} from "react-icons/fa";
import { FaLock,FaUser } from "react-icons/fa";
import './Login.css'
import '../Register/Register.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { json } from 'react-router-dom';



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
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const repasswordRef = useRef(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
  
    

    if (!username || !password || !repassword) {
      toast.error('All fields are required');
      return;
    }

    if (password !== repassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, and one special character');
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Re-entered Password:", repassword);
     
    const userData = {
      username: username,
      password: password,
      repassword: repassword
    };
    if(validatePassword){
     

     
      const jsonData = JSON.stringify(userData);
        try {
          const response = await axios.post('http:localhost:8081/x/register', 
          jsonData, {
            headers: {
              'Content-Type': 'application/json' // Specify JSON content type in headers
            }
          }
          );
        toast.success(response.data.message);
      
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        repasswordRef.current.value = '';
          

        } catch (error) {
         // console.log(error.response.data.message)
          toast.error("User not created , please enter credentials again !!!")
          return 
        }
      }
      toast.success("Succesfully created a User")

    // Clear the form after submission
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    repasswordRef.current.value = '';
  };

    const validatePassword = (password) => 
      {

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        
        return (
          uppercaseRegex.test(password) &&
          lowercaseRegex.test(password) &&
          specialCharacterRegex.test(password)

        );
      
      };

      const handleInputChange = () => 
        {
          const password = passwordRef.current.value;
          const repassword = repasswordRef.current.value;
          setIsSubmitDisabled(password !== repassword || !validatePassword(password));
        };

  return (
    <div className="register">

      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <h1>New Register</h1>
        <div className="input-box1">
          <input
            className='usr1'
            type='text'
            placeholder='Username'
            ref={usernameRef}
            onChange={handleInputChange}
          />
          <FaUser className='icon1' />
        </div>

        <div className="input-box1">
          <input
            className='pwd1'
            type="password"
            placeholder='Password'
            ref={passwordRef}
            onChange={handleInputChange}
          />
          <FaLock className='icon1' />
        </div>

        <div className="input-box1">
          <input
            className='pwd2'
            type="password"
            placeholder='Re-Password'
            ref={repasswordRef}
            onChange={handleInputChange}
          />
          <div className='icon1'><FaLock /></div>
        </div>
          <button type='submit' disabled={isSubmitDisabled}>Register</button>
      </form>

      <span className='s1'> Back to home <a className="register1" href='/'>Home</a></span>

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