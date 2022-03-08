import style from "./HomeImage.moudle.css";
import background from "./home.jpg";

const HomeImage = () =>{
    return(
        <div className="container">
            <img className="image" src={background} alt="homeImg"/>
            <text className="big_description">Best <font color="EC4C5A">Food</font> Delivery in your area</text>
            <text className="small_description"> For A Quality Dining Experience </text>
            <button className="partner_button">Become our partner</button>
        </div>
    )
}

export default HomeImage;
