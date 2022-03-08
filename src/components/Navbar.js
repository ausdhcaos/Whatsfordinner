import logo from'./logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
   return (
    <nav className="nav_container">
        <div className="leftandright">
            <div className="topnav__left">
                <img className="logo" src={logo} onClick />
            </div>
            <div className="topnav__right">
                <ul>
                    <li><Link to="/" style={{ color:'#000000' ,textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/resturants" style={{color:'#000000' ,textDecoration: 'none'}}>Resturants</Link></li>
                    <li><Link to="/contact" style={{color:'#000000' ,textDecoration: 'none'}}>Contact</Link></li>
                    <li><Link to="/login" style={{ color:'#000000' ,textDecoration: 'none' }}>Login/Register</Link></li>
                </ul>
                {/* <a class="active" href="#Resturants">Resturants</a>
                <a href="#become a partner">Become a partner</a>
                <a href="#contact">Contact</a>
                <a href="#login">Login</a> */}
            </div>
        </div>
    </nav>
   )
 }
 
 export default Navbar