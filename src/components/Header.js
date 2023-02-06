import React from "react";
import ProfileImage from "../assets/profile-image.png";

const Title = () => {
  return (
    <div className="profile-section">
      <img src={ProfileImage} />

      <p>Annette Black</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header-container">
      <Title />
      <ul className="nav-items">
        <li>Programs</li>
        <li>Retreats</li>
        <li>Blogs</li>
        <li>Contact us </li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
