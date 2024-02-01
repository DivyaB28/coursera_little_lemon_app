import React from "react";
import "../styles/about.scss";
import chefsImg from "../assets/Mario and Adrian A.jpg";
import resturantImg from "../assets/restaurant chef B.jpg";

const About = () => {
  return (
    <section id="#about" className="about">
      <article className="about__desciption">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </article>
      <article className="about__img">
        <img
          src={chefsImg}
          alt="Chef Mario and Adrian"
          width="320"
          height="322"
        />
        <img src={resturantImg} alt="Chef kitchen" width="276" height="338" />
      </article>
    </section>
  );
};

export default About;
