import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-twitter"></i>
      </div>
      <p> &copy; {new Date().getFullYear()}&nbsp;Pizzashop.com</p>
    </div>
  );
}

export default Footer;
