import React, { useEffect, useState } from "react";

const BookingForm = ({ handleFormSubmit, updateTimes, availableTimes }) => {
  const defaultTime = availableTimes[0];
  const minimumDate = new Date().toISOString().split("T")[0];

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [time, setTime] = useState(defaultTime);
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState(minimumDate);
  const [occasion, setOccasion] = useState("");
  const [preference, setPreference] = useState("");
  const [comments, setComments] = useState("");

  const [errorMessage, setErrorMessage] = useState({
    fName: "* Please provide your first name",
    lName: "* Please provide your last name",
    email: "* Please provide email",
    tel: "* Please provide a phone number",
    date: "* Please choose a valid date",
    time: "* Please choose a valid time",
    occasion: "* Please choose a valid occasion",
    guests: "* Please enter a number between 1 and 10",
  });

  useEffect(() => {
    setReservation({
      fName: fName,
      lName: lName,
      email: email,
      tel: tel,
      guests: guests,
      date: date,
      time: time,
      occasion: occasion,
      preference: preference,
      comments: comments,
    });
  }, [
    fName,
    lName,
    email,
    tel,
    time,
    guests,
    date,
    occasion,
    preference,
    comments,
  ]);

  const [reservation, setReservation] = useState({
    fName: fName,
    lName: lName,
    email: email,
    tel: tel,
    guests: guests,
    date: "",
    time: "",
    occasion: occasion,
    preference: preference,
    comments: comments,
  });

  const isFNameValid = () => fName !== "";
  const isLNameValid = () => lName !== "";
  const isEmailValid = () => {
    if (email === "") {
      return false;
    } else {
      let regex = new RegExp(
        "^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+.[a-zA-Z]{2,4}$"
      );
      return regex.test(email);
    }
  };
  const isTelValid = () => {
    if (tel === "") {
      return false;
    } else {
      let regex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$");
      return regex.test(tel);
    }
  };
  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isGuestsValid = () => guests >= 1;
  const isOccasionValid = () => occasion !== "";

  const allFieldsValid = () =>
    isFNameValid() &&
    isLNameValid() &&
    isTelValid() &&
    isDateValid() &&
    isTimeValid() &&
    isGuestsValid() &&
    isOccasionValid();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(reservation);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="res-fName">First Name</label>
      <input
        type="text"
        id="res-fName"
        name="fName"
        value={fName}
        onChange={(e) => {
          setFName(e.target.value);
          setReservation({ ...reservation, fName: fName });
        }}
        required
      />
      {!isFNameValid() ? <p>{errorMessage.fName}</p> : null}

      <label htmlFor="res-lName">Last Name</label>
      <input
        type="text"
        id="res-lName"
        name="lName"
        value={lName}
        onChange={(e) => {
          setLName(e.target.value);
          setReservation({ ...reservation, lName: lName });
        }}
        required
      />
      {!isLNameValid() ? <p>{errorMessage.lName}</p> : null}
      <label htmlFor="res-email">Email</label>
      <input
        type="email"
        id="res-email"
        name="email"
        value={email}
        minLength={4}
        maxLength={200}
        onChange={(e) => {
          setEmail(e.target.value);
          setReservation({ ...reservation, email: email });
        }}
        required
      />
      {!isEmailValid() ? <p>{errorMessage.email}</p> : null}

      <label htmlFor="res-tel">Phone number</label>
      <input
        type="tel"
        id="res-tel"
        name="tel"
        placeholder="+(123) 1234 123"
        autoComplete="+(123)1234123"
        value={tel}
        required
        minLength={10}
        maxLength={25}
        onChange={(e) => {
          setTel(e.target.value);
          setReservation({ ...reservation, tel: tel });
        }}
      />
      {!isTelValid() ? <p>{errorMessage.tel}</p> : null}

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="resDate"
        min={minimumDate}
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          setReservation({ ...reservation, date: date });
          updateTimes(e.target.value);
        }}
        required
      />
      {!isDateValid() ? <p>{errorMessage.tel}</p> : null}

      <label htmlFor="res-time">Select Time</label>
      <select
        id="res-time"
        name="resTime"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          setReservation({ ...reservation, time: time });
        }}
        required={true}
      >
        {availableTimes.map((times, index) => {
          return (
            <option value={times} key={index} data-testid="booking-time-option">
              {times}
            </option>
          );
        })}
      </select>
      {!isTimeValid() ? <p>{errorMessage.time}</p> : null}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
          setReservation({ ...reservation, guests: guests });
        }}
        required
      />
      {!isGuestsValid() ? <p>{errorMessage.guests}</p> : null}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
          setReservation({ ...reservation, occasion: occasion });
        }}
        required
      >
        <option value="">None</option>
        {["Birthday", "Anniversary", "Engagement", "Others"].map(
          (item, index) => (
            <option
              key={index}
              value={item}
              data-testid="booking-occasion-option"
            >
              {item}
            </option>
          )
        )}
      </select>
      {!isOccasionValid() ? <p>{errorMessage.occasion}</p> : null}

      <label htmlFor="preference">Select preferences</label>
      <select
        name="preference"
        id="preference"
        value={preference}
        onChange={(e) => {
          setPreference(e.target.value);
          setReservation({ ...reservation, preference: preference });
        }}
      >
        <option value="">None</option>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>

      <label htmlFor="comments">Additional Comments</label>
      <textarea
        name="comments"
        id="comments"
        row={8}
        cols={60}
        placeholder="Any other requests to ask for..."
        value={comments}
        onChange={(e) => {
          setComments(e.target.value);
          setReservation({ ...reservation, comments: comments });
        }}
      />
      <button
        type="submit"
        className="btn"
        aria-label="on click"
        disabled={!allFieldsValid()}
      >
        Make a reservation
      </button>
    </form>
  );
};

export default BookingForm;
