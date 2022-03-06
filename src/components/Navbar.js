import logo from'../logo.svg'
import './Navbar.css'
const Navbar = () => {
   return (
    <div class="nav_container">
        <div class="leftandright">
            <div class="topnav__left">
                <img class="logo" src={logo} />
            </div>
            <div class="topnav__right">
                <a class="active" href="#Resturants">Resturants</a>
                <a href="#become a partner">Become a partner</a>
                <a href="#contact">Contact</a>
                <a href="#login">Login</a>
            </div>
        </div>
    </div>
   )
 }
 
 export default Navbar