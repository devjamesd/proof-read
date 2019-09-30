import React from "react";
import "./styles.scss";
import Logo from "./../../assets/logo.png";

const Header = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img className="img" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
