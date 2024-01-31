import React, { useContext } from "react";
import HambergerMenu from "./HambergerMenu";
import { HeaderContext } from "../utils/contexts";
import "../styles/navbar.scss";

const Navbar = () => {
  const menuStatus = useContext(HeaderContext);
  const { isMenuOpen, toggleIsMenu } = menuStatus;

  return (
    <nav className="navbar">
      <HambergerMenu />
      <ul className={`navlist ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/" className="navbar__link">
            HOME
          </a>
        </li>
        <li>
          <a href="/about" className="navbar__link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/about" className="navbar__link">
            MENU
          </a>
        </li>
        <li>
          <a href="/about" className="navbar__link">
            RESERVATION
          </a>
        </li>
        <li>
          <a href="/about" className="navbar__link">
            ORDER ONLINE
          </a>
        </li>
        <li>
          <a href="#" className="btn navbar__link btn__login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
