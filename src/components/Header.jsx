import React from "react";

import logo from "../assets/images/logo-imdb.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} className="nav nav--logo" alt="Logo" />
      </nav>
    </header>
  );
};

export default Header;
