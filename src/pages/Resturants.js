import React from 'react';
import background from "./home.jpg";
import './Restaurants.css';

const resturants = () => {
  return (
    <div className="restaurants">
      <img className="image" src={background} alt="homeImg"/>
      <div className="buttons">
                <text className="buttons_title">Dining <font color="EC4C5A">opportunities</font> near you</text>
                <div className="choices">
                    <div className="choice">      
                    </div>
                    <div className="choice">
                    </div>
                    <div className="choice">
                    </div>
                    <div className="choice">
                    </div>
                </div>         
      </div>
    </div>

  )
}

export default resturants