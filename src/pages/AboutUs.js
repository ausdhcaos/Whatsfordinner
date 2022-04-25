import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const aboutUs = () => {
  return (
    <div className="sec">
      <Navbar/>
      <text className="sec_title">News</text>
      <div className="rests">
          Welcome to Better Dinner, a fresh and innovative fine dining experience that aims to connect customers to restaurants via our new food reservation and delivery services.
		  <br/>
		  <br/>
		  Our Goals:
			<br/>
			- Provide a fast and fluid food ordering + reservation system to our customers
			<br/>
			- Constantly add and update restaurants to customers a wide selection of options, while monitoring partered restaurants to make sure they are up to standards
			<br/>
			- Give discounts and promotions to certain restaurants throughout the year to boost the discoverability of all kinds of restaurants
      </div>
    </div>
  )
}
export default aboutUs