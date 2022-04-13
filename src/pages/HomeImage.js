import style from "./HomeImage.moudle.css";
import background from "./home.jpg";
import mrlee from"../components/MrLee.jpg"
import pizzaworld from"../components/PizzaWorld.jpg"
import steakhouse from"../components/KyleSteakhouse.jpg"
import { Link } from 'react-router-dom'
import buttones from "../components/buttones"


const HomeImage = () =>{
    return(
        <div className="container">
            <img className="image" src={background} alt="homeImg"/>
            <text className="big_description">Best <font color="EC4C5A">Food</font> Delivery in your area</text>
            <text className="small_description"> For A Quality Dining Experience </text>


            <div className="sec">
                <text className="sec_title">Dining <font color="EC4C5A">opporrtunities</font> near you</text>
                <div className="rests">
                    <div className="rest"  >
                        <img src={mrlee} alt="MrLee" className="rest_pic"/>
                        <div className="rest_name">Mr Lee Chinese resturant</div>
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

          
        </div>
    )
}

export default HomeImage;
