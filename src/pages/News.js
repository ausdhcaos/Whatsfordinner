import React from 'react'
import { Link } from 'react-router-dom';
import newDishes from"../components/NewDishes.jpg"
import christmasDiscount from"../components/ChristmasDiscount.jpg"
import Navbar from '../components/Navbar.js';

const news = () => {
  return (
    <div className="sec">
      <Navbar/>
      <div className="rests">
          <div className="rest"  >
              <img src={newDishes} alt="MrLee" className="rest_pic"/>
              <div className="rest_name">New Dishes Have Arrived!</div>
          </div>
		  <div className="rest"  >
              <img src={christmasDiscount} alt="Christmas" className="rest_pic"/>
              <div className="rest_name">Christmas Discounts!</div>
          </div>
      </div>
    </div>
  )
}
export default news