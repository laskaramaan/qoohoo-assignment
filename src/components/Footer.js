import React from "react";
import PoweredBy from "../assets/powered-by.png";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-p1">
          <img src={PoweredBy} />{" "}
        </div>
        <div className="footer-p2">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
