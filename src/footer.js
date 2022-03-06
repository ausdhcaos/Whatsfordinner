import React from "react";
import { render } from "react-dom"; 

const footerStyle = {
  backgroundColor: "#E84857",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "90%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}
render(
  <div>	
    <Footer>
      <ul>
	<li>News</li>
  <li>Contact us</li>
      </ul>
    </Footer>
  </div>,
  document.getElementById("roots")
);

export default Footer;