import React from 'react'
import mrlee from"../components/MrLee.jpg"
import pizzaworld from"../components/PizzaWorld.jpg"
import steakhouse from"../components/KyleSteakhouse.jpg"
import Navbar from '../components/Navbar.js';
import { Link } from 'react-router-dom';

const resturants = () => {
  return (
    <div className="sec">
      <Navbar/>
      <text className="sec_title">Dining <font color="EC4C5A">opporrtunities</font> near you</text>
      <div className="rests">
          <div className="rest"  >
              <img src={mrlee} alt="MrLee" className="rest_pic"/>
              <div className="rest_name"><Link to="firstResturant" style={{ color:'white' ,textDecoration: 'none' }}>MrLee Chinese Resturant</Link></div>
          </div>
          <div className="rest">
              <img src={pizzaworld} alt="PizzaWorld" className="rest_pic"/>
              <div className="rest_name">Pizza World</div>
          </div>
          <div className="rest">
              <img src={steakhouse} alt="Steakhouse" className="rest_pic"/>
              <div className="rest_name">Kyle Steakhouse</div>
          </div>
      </div>
    </div>
  )
}
export default resturants
