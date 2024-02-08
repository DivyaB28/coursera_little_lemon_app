import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/confirmReservation.scss";

const ConfirmReservation = () => {
  const navigate = useNavigate();
  return (
    <div className="successMsg">
      <p>Success, Your reservation has been confirmed!</p>
      <button
        className="btn btn__primary"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmReservation;
