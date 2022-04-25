import React from "react";
import Header from "../components/Header";
import '../components/Header.css';
import './RestLogin.css';
import LoginHeader from "../components/loginHeader";
import {Link} from "react-router-dom";
function RestLogin()
{
    return(
        <div>



            <form className='login-form'>
                <Header />

                <h1 >log in to continue</h1>
                <input type='text' className='username' placeholder='Email'/>
                <input type='password' value='password' className='password' placeholder='Password'/>
                <button className='button'>Log in > </button>
                <text className='register'>No account yet? <Link to="/RestSignup" style={{ color:'white' }}>Register here</Link></text>
                <text className='trouble'>Trouble signing in? <Link to="/trouble_sigin_in" style={{ color:'white' }}>Click here</Link></text>

            </form>


        </div>


    )
}
export default RestLogin