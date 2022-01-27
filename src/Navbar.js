import './Navbar.css';
import React from 'react'
import logo from './logo.svg';
function App() {
  return (

<div id="root">
  <ul id="sub">
    <li id="mini">
      <img src={logo} alt="logo" />
      <a href="#home"style={{color: "Black", textDecoration: "none", fontWeight: "bold", fontSize: 30}}>Resturants</a> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="#news"style={{color: "Black", textDecoration: "none", fontWeight: "bold", fontSize: 30}}>Become partner</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      <a href="#contact"style={{color: "Black", textDecoration: "none", fontWeight: "bold", fontSize: 30}}>Contact</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="#about"style={{color: "Black", textDecoration: "none", fontWeight: "bold", fontSize: 30, backgroundColor: "#E84857", borderRadius: 10}}>Login</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="#about"style={{color: "Black", textDecoration: "none", fontWeight: "bold", fontSize: 30}}>AboutUs</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
    </li>
  </ul>

</div>

  
    



  );
}

export default App;
