import style from "./HomeImage.moudle.css";
import background from "./home.jpg";

const HomeImage = () =>{
    return(
        <div className="container">
            <img className="image" src={background} alt="homeImg"/>
            <text className="big_description">Best <font color="EC4C5A">Food</font> Delivery in your area</text>
            <text className="small_description"> For A Quality Dining Experience </text>
            <button className="partner_button">Become our partner</button>

            <div className="sec">
                <text className="sec_title">Dining <font color="EC4C5A">opporrtunities</font> near you</text>
                <div className="rests">
                    <div className="rest">
                        
                    </div>
                    <div className="rest">
                    </div>
                    <div className="rest">
                    </div>
                </div>
               
            </div>

          
        </div>
    )
}

export default HomeImage;
