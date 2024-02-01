import React, { useEffect, useState } from "react";
import "../styles/testimonials.scss";

const Testimonials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const userPromise = fetch(
      "https://random-data-api.com/api/v2/users?size=4"
    );

    userPromise
      .then((res) => res.json())
      .then((data) => {
        let res = data.map(({ id, first_name, last_name, avatar }) => ({
          id,
          firstName: first_name,
          lastName: last_name,
          avatar,
          rating: 5,
        }));

        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonials__container">
        {data.map((user, index) => (
          <UserReviewCard user={user} key={index} />
        ))}
      </div>
    </section>
  );
};

const UserReviewCard = ({ user }) => {
  return (
    <article key={user.id} className="testimonials__container__child">
      <div className="rating">
        {[...Array(user.rating)].map((e, i) => (
          <span class="material-symbols-outlined">star</span>
        ))}
      </div>
      <article className="details">
        <img src={user.avatar} alt="user avatar" width="47.09" height="46" />
        <h4>{user.firstName}</h4>
      </article>
      <p className="review">Review text of the user...</p>
    </article>
  );
};

export default Testimonials;
