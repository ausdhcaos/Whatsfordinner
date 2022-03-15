import React, { useState } from 'react';
import bgimg from './login.png';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  return (
    <div className='main'>  
        <form className='Register-form'>
            <h1 >Sign up to Better Dinner</h1>
            <input type='text' className='Email' placeholder='Email address...'/>
            <input type='text' className='Username' placeholder='Username...'/>
            <input type='password' className='password' placeholder='Password...'/>
            <input type='password' className='re-password' placeholder='Re-enter Password...'/>
            <input type='text' className='Full-name' placeholder='Enter full name...'/> 
            <input type="checkbox" id="agree" onChange={checkboxHandler} className='lable'  />
            <h3 >I agree to the Terms and Conditions</h3>
            <button disabled={!agree} className="button">
              Sign Up
            </button>       
            
      
       </form>  
        <img className='bg' src={bgimg}/>
    </div> 
  )
}

export default Register


