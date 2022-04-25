import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import email from"../components/email.jpg"
import phone from"../components/phone.jpg"
import liveChat from"../components/liveChat.jpg"

const technicalSupport = () => {
  return (
    <div className="sec">
      <Navbar/>
      <div className="rests">
          <div className="rest"  >
              <img src={email} alt="email" className="rest_pic"/>
              <div className="rest_name">Email Us: support@betterdinner.com</div>
          </div>
		  <div className="rest"  >
              <img src={phone} alt="phone" className="rest_pic"/>
              <div className="rest_name">Call Us: 1234 5678</div>
          </div>
		  <div className="rest"  >
              <img src={liveChat} alt="liveChat" className="rest_pic"/>
              <div className="rest_name">Live Chat</div>
          </div>
      </div>
    </div>
  )
}
export default technicalSupport