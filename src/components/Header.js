import React from "react";
import Logo from "../assets/Logo.svg";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
