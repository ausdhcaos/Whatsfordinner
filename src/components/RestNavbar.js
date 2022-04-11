import logo from'./logo.svg';
import './RestNavbar.css';
import { Link } from 'react-router-dom';
const RestNavbar = () => {
   return (
    <nav className="nav_container">
        <div className="leftandright">
            <div className="topnav_left">
                <ul>
                    <li><Link to="/" style={{ color:'#000000' ,textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/contact" style={{color:'#000000' ,textDecoration: 'none'}}>Delivery/Pickup</Link></li>    
                </ul>   

            </div>
            <div className="topnav_right">
                <img className="logoo" src={logo} onClick />
                <ul>
                    <li><Link to="/login" style={{ color:'#000000' ,textDecoration: 'none' }}>Preorder/Booking</Link></li>
                    <li><Link to="/resturants" style={{backgroundColor:'#E84857',color:'#000000' ,textDecoration: 'none'}}>Login/Register</Link></li>
                </ul>
            </div>


        </div>
    </nav>
   )
 }
 
 export default RestNavbar