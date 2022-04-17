import {Navbar,Nav,Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Header.css';
import './RestNavbar.css';


function Header()
{
    return(
        <div>

            <Navbar className="color-nav" bg="dark" variant="dark">
                {/*<Navbar.Brand href="/">betterdinner</Navbar.Brand>*/}
                <div className="topnav__right">
                    <Nav className="test1">
                        <Link to="/add" className="test" >Add Product </Link>
                        <Link to="/update" className="test" >Update Product</Link>
                        <Link to="/Restlogin" className="test" >Login </Link>
                        <Link to="/RestSignup" className="test" >Register</Link>

                    </Nav>
                </div>


            </Navbar>

        </div>
    )
}
export default Header