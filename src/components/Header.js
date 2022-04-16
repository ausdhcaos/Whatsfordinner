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
                    <Nav className="test">
                        <Link to="/add" >Add </Link>
                        <Link to="/update" >Update Product</Link>
                        <Link to="/Restlogin" >Login </Link>
                        <Link to="/RestSignup" >register</Link>

                    </Nav>
                </div>


            </Navbar>

        </div>
    )
}
export default Header