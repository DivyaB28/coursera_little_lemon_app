import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/about">MENU</a>
        </li>
        <li>
          <a href="/about">RESERVATION</a>
        </li>
        <li>
          <a href="/about">ORDER ONLINE</a>
        </li>
        <li>
          <button role="button">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
