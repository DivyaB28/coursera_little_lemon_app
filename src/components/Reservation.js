import React, { useReducer } from "react";
import "../styles/reservation.scss";
import BookingForm from "./BookingForm";
import { fetchApi, submitApi } from "../utils/mockApi";
import { useNavigate } from "react-router-dom";

const updateTimes = (availableTimes, date) => {
  const response = fetchApi(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initialTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchApi(new Date()),
];

const BookingPage = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initialTimes
  );

  const navigate = useNavigate();

  function handleFormSubmit(reservation) {
    const response = submitApi(reservation);
    if (response) {
      navigate("/confirm-reservation");
    }
  }
  return (
    <div className="res-form">
      <h1 data-testid="form-heading" role="heading">
        Reservation Form
      </h1>
      <BookingForm
        handleFormSubmit={handleFormSubmit}
        availableTimes={availableTimes}
        updateTimes={dispatchOnDateChange}
      />
    </div>
  );
};

export default BookingPage;
