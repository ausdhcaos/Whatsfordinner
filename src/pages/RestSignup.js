
import Header from "../components/Header";
import '../components/Header.css';
import LoginHeader from "../components/loginHeader";
import React, {useEffect, useState} from 'react';


function RestSignup(){
    const [agree, setAgree] = useState(false);
    const chkbox = () => {
        setAgree(!agree);
    };
    return(
        <div>
            <Header />

            <h1>Register here </h1>
            <form className='Register-form'>
                <LoginHeader />
                <h1 >Sign up to Better Dinner</h1>


                <input type='text' className='Email' placeholder='Email address...'/>
                <input type='text' className='Username' placeholder='Username...'/>
                <input type='password' className='password' placeholder='Password...'/>
                <input type='checkbox' id='agree' onChange={chkbox} className='lable'  />
                <h3 >I agree to the Terms and Conditions</h3>
                <button disabled={!agree} className="button" >
                    Sign Up
                </button>



            </form>


        </div>
    )

}

export default RestSignup