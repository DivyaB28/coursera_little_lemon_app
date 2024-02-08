import React from "react";
import resturant from "../assets/restaurant.jpg";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div id="footer" className="footer__img">
        <img src={resturant} alt="Resturant view" />
      </div>
      <div id="footer" className="footer__container">
        <h1>Doormat Navigation</h1>
        <ul>
          <li>
            {/* <a href="/">HOME</a> */}
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            {/* <a href="#about">ABOUT</a> */}
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            {/* <a href="#menu">MENU</a> */}
            <Link to={"/menu"}>HOME</Link>
          </li>
          <li>
            {/* <a href="/">RESERVATIONS</a> */}
            <Link to={"/reservations"}>RESERVATIONS</Link>
          </li>
          <li>
            {/* <a href="/">ORDER ONLINE</a> */}
            <Link to={"/order"}>ORDER ONLINE</Link>
          </li>
          <li>
            {/* <a href="/">LOGIN</a> */}
            <Link to={"/"}>LOGIN</Link>
          </li>
        </ul>
      </div>
      <div id="footer" className="footer__container">
        <h1>Contact</h1>
        <ul>
          <li>ADDRESS</li>
          <li>PHONE NUMBER</li>
          <li>EMAIL</li>
        </ul>
      </div>
      <div id="footer" className="footer__container">
        <h1>Social Media</h1>
        <ul>
          <li>
            <a href="/">FACEBOOK</a>
          </li>
          <li>
            <a href="/">INSTAGRAM</a>
          </li>
          <li>
            <a href="/">TWITTER</a>
          </li>
          <li>
            <a href="/">YOUTUBE</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
