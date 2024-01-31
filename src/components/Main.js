import React from "react";
import desktopImage from "../assets/restauranfood.jpg";
import "../styles/main.scss";

const Main = () => {
  return (
    <main id="main">
      <section className="main">
        <div className="main__img">
          <img alt="Little Lemon resturant" src={desktopImage} />
        </div>
        <div className="main__text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recepies served with a twist.{" "}
          </p>
          <button className="btn btn__primary">Reserve a table</button>
        </div>
      </section>
    </main>
  );
};

export default Main;
