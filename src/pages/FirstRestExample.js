import React from 'react'
import mrlee from"../components/MrLee.jpg"
import RestNavbar from '../components/RestNavbar.js';
import pizzaworld from '../components/PizzaWorld.jpg';
import background from "./home.jpg";
import './FirstRestExample.css';
import {Link} from 'react-router-dom';

const FirstRestExample = () => {
  return (
    <div className="container" >
    <RestNavbar/>
    <img className="image" src={background} alt="homeImg"/>
    <h1>News</h1>
    <div className="news">
          <div className="newsbox"  >
              <img src={mrlee} alt="MrLee" className="rest_pic"/>
              <div className="news_name"><p>aedkqwjhbdfuqwodfcb</p></div>
          </div>
          <div className="newsbox">
              <img src={pizzaworld} alt="PizzaWorld" className="rest_pic"/>
              <div className="news_name">dasvcasvasdvsdavsd</div>
          </div>
         
      </div>
    </div>
   
  )
}
export default FirstRestExample
