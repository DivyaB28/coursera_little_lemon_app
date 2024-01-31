import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Navbar from "./Navbar";
import "../styles/header.scss";
import { HeaderContext } from "../utils/contexts";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContext.Provider value={{ isMenuOpen, toggleIsMenu }}>
      <header className="header">
        <a href="#main" className="skipLink">
          Skip to main content
        </a>
        <div className="header__container">
          <a href="/">
            <img src={Logo} alt="" className="logoImg" />
          </a>
          <Navbar />
        </div>
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
