import React, { useContext } from "react";
import { HeaderContext } from "../utils/contexts";
import "../styles/hambergermenu.scss";

const HambergerMenu = () => {
  const menuStatus = useContext(HeaderContext);
  const { isMenuOpen, toggleIsMenu = () => {} } = menuStatus;
  console.log(isMenuOpen);
  return (
    <button
      type="button"
      aria-label="hamberger menu"
      aria-haspopup="menu"
      aria-controls="navbar-menu"
      aria-expanded={isMenuOpen}
      onClick={toggleIsMenu}
      className={`hamburger ${isMenuOpen ? "open" : ""}`}
    >
      <span className="hamburger__box hamburger__box1"></span>
      <span className="hamburger__box hamburger__box2"></span>
      <span className="hamburger__box hamburger__box3"></span>
    </button>
  );
};

export default HambergerMenu;
