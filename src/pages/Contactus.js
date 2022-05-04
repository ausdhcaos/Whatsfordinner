import React from "react";
import {useState} from "react";
import Navbar from "../components/Navbar";
import "./Contactus.css"

function Contactus(){

    const [agree, setAgree] = useState(false);
    const chkbox = () => {
        setAgree(!agree);
    };
    return(
        <div>
            <Navbar/>
            <form className='contacts'>
                <h2> Contact us for any known issues!!!!</h2>

                <input type='text' className='fullname' placeholder='Full Name'/>
                <input type='text' className='email' placeholder='Email Address'/>
                <input
                    type='phone'
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    className='phone' placeholder='Phone number'/>

                <input type='text' className='text' placeholder='Please enter your message here'/>
                <input type='checkbox' id='agree' onChange={chkbox} className='contact-lable'  />
                <h4 >I agree to receive email and other promotional material </h4>
                <button disabled={!agree} className="button-contact" >
                    Send
                </button>





            </form>


        </div>

    )
}
export default Contactus