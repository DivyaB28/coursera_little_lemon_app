import React from "react";
import greeksalad from "../assets/greek salad.jpg";
import Vectordeliver from "../assets/Vectordeliver.svg";
import bruchetta from "../assets/bruchetta.jpg";
import lemonDessert from "../assets/lemon dessert.jpg";
import "../styles/menuoptions.scss";
import { useResolvedPath } from "react-router-dom";

const MenuOptions = () => {
  const resolved = useResolvedPath();
  const matched = resolved.pathname.includes("/menu");
  console.log(resolved.pathname.includes("/menu"));
  return (
    <article
      id="#menu"
      className={`${
        matched ? "specialMenu menuPage" : "specialMenu menuPosition"
      }`}
    >
      <div className="specialMenu__header">
        <h1>This weeks specials!</h1>
        <button className="btn btn__primary">Order Online</button>
      </div>
      <div className="specialMenu__container">
        <article className="specialMenu__container__1">
          <img alt="Geek salad" src={greeksalad} className="article__img" />
          <div className="article__header">
            <h4>Geeks Salad</h4>
            <span>$12.99</span>
          </div>
          <p className="article__description">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <div className="article__footer">
            <p>Order a delivery</p>
            <span>
              <img
                src={Vectordeliver}
                alt="Deliver a order"
                width="16.67"
                height="15.54"
              />
            </span>
          </div>
        </article>

        <article className="specialMenu__container__2">
          <img alt="Bruchetta" src={bruchetta} className="article__img" />
          <div className="article__header">
            <h4>Bruchetta</h4>
            <span>$5.99</span>
          </div>
          <p className="article__description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <div className="article__footer">
            <p>Order a delivery</p>
            <span>
              <img
                src={Vectordeliver}
                alt="Deliver a order"
                width="16.67"
                height="15.54"
              />
            </span>
          </div>
        </article>

        <article className="specialMenu__container__3">
          <img
            alt="Lemon Dessert"
            src={lemonDessert}
            className="article__img"
          />
          <div className="article__header">
            <h4>Lemmon Desert</h4>
            <span>$5.00</span>
          </div>
          <p className="article__description">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <div className="article__footer">
            <p>Order a delivery</p>
            <span>
              <img
                src={Vectordeliver}
                alt="Deliver a order"
                width="16.67"
                height="15.54"
              />
            </span>
          </div>
        </article>
      </div>
    </article>
  );
};

export default MenuOptions;
