import { MemoryRouter } from "react-router-dom";
import Reservation from "../components/Reservation";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Reservation Page", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  test("should have one or more available booking time options", async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId("booking-time-option");
    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test("should update available booking time options on dispatch", async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    const bookingDate = "2024-02-07";
    const dateInput = screen.getByLabelText(/Choose date/);
    const initialTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach((timeOption) => {
      expect(timeOption.value).toMatch(timeFormat);
    });

    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );

    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});
