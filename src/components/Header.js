import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Navbar from "./Navbar";
import "../styles/header.scss";
import { HeaderContext } from "../utils/contexts";
import { Link } from "react-router-dom";
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
          <Link to={"/"}>
            <img src={Logo} alt="" className="logoImg" />
          </Link>
          <Navbar />
        </div>
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
