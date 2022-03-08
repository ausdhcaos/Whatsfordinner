import React from 'react';
import bgimg from './login.png';
import { Link } from 'react-router-dom';
import './Login.css';
const login = () => {
  return (
    <div className='main'>  
        <form className='login-form'>
            <h1 >log in to continue</h1>
            <input type='text' className='username' placeholder='username'/>
            <input type='password' className='password' placeholder='password'/>
            <button className='button'>Log in > </button>
            <text className='register'>No account yet? <Link to="/register" style={{ color:'white' }}>Register here</Link></text>
            <text className='trouble'>Trouble signing in? <Link to="/trouble_sigin_in" style={{ color:'white' }}>Click here</Link></text>
            
        </form>  
        <img className='bg' src={bgimg}/>
    </div> 
  )
}

export default login