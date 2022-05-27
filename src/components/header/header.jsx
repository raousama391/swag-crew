import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img
        style={{
          width: 100
        }}
        src={Logo}
        alt=""
      />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>      
      <Link to="/auth" className="option">
        SignUp
      </Link>
      <Link to="/" className="option">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
