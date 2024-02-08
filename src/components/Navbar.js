import React, { useContext } from "react";
import HambergerMenu from "./HambergerMenu";
import { HeaderContext } from "../utils/contexts";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuStatus = useContext(HeaderContext);
  const { isMenuOpen, toggleIsMenu } = menuStatus;

  return (
    <nav className="navbar">
      <HambergerMenu />
      <ul className={`navlist ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to={"/"} className="navbar__link">
            {" "}
            HOME
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="navbar__link">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to={"/menu"} className="navbar__link">
            MENU
          </Link>
        </li>
        <li>
          <Link to={"/reservation"} className="navbar__link">
            RESERVATION
          </Link>
        </li>
        <li>
          <Link to={"/orderonline"} className="navbar__link">
            ORDER ONLINE
          </Link>
        </li>
        <li>
          <Link to={"/"} className="navbar__link">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
