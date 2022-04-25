// import React from "react";
// import { render } from "react-dom"; 

// const footerStyle = {
//   backgroundColor: "#E84857",
//   fontSize: "20px",
//   color: "white",
//   borderTop: "1px solid",
//   textAlign: "center",
//   padding: "20px",
//   position: "fixed",
//   left: "0",
//   bottom: "0",
//   height: "60px",
//   width: "100%"
// };

// const phantomStyle = {
//   display: "block",
//   padding: "20px",
//   height: "60px",
//   width: "90%"
// };

// function Footer({ children }) {
//   return (
//     <div>
//       <div style={phantomStyle} />
//       <div style={footerStyle}>{children}</div>
//     </div>
//   );
// }
// render(
//   <div>	
//     <Footer>
//       <ul>
// 	<li>News</li>
//   <li>Contact us</li>
//       </ul>
//     </Footer>
//   </div>,
//   document.getElementById("roots")
// );

// export default Footer;

import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer className='foot'>
      <ul>
        <li><Link to="/news" style={{ color:'#000000' ,textDecoration: 'none' }}>News</Link></li>
        <li><Link to="/technicalSupport" style={{ color:'#000000' ,textDecoration: 'none' }}>Technical Support</Link></li>
        <li><Link to="/termsAndConditions" style={{ color:'#000000' ,textDecoration: 'none' }}>Terms and Conditions</Link></li>
        <li><Link to="/aboutUs" style={{ color:'#000000' ,textDecoration: 'none' }}>About Us</Link></li>
      </ul>
    </footer>
  )
}

export default footer