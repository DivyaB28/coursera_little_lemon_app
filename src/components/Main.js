import React from "react";
import desktopImage from "../assets/restauranfood.jpg";
import "../styles/main.scss";
import MenuOptions from "./MenuOptions";
import Testimonials from "./Testimonials";
import About from "./About";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main id="main">
      <section className="main">
        <div className="main__img">
          <img alt="Little Lemon resturant" src={desktopImage} />
        </div>
        <div className="main__text">
          <h1 data-test-id="hero-header">Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recepies served with a twist.{" "}
          </p>
          <button
            className="btn btn__primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/reservation");
            }}
          >
            Reserve a table
          </button>
        </div>
      </section>
      <MenuOptions />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;
