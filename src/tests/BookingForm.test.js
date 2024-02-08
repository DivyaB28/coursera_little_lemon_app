import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("Booking form", () => {
  const availableTimes = ["17:00", "17:30"];
  const handleFormSubmit = jest.fn();
  const today = new Date().toISOString().split("T")[0];

  test("should correctly render all fields and their default values", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        handleFormSubmit={handleFormSubmit}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "res-date");
    expect(dateInput).toHaveValue(today);

    const timeSelect = screen.getByLabelText(/Select Time/);
    const timeOptions = await screen.findAllByTestId("booking-time-option");
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "res-time");
    expect(timeOptions.length).toBe(2);

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute("id", "guests");
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(
      "booking-occasion-option"
    );
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionOptions.length).toBe(4);

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeDisabled();
  });

  test("should successfully submit form with default values", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        handleFormSubmit={handleFormSubmit}
      />
    );

    const firstName = screen.getByLabelText(/First Name/);
    fireEvent.change(firstName, { target: { value: "test" } });
    fireEvent.blur(firstName);

    const lastName = screen.getByLabelText(/Last Name/);
    fireEvent.change(lastName, { target: { value: "test" } });
    fireEvent.blur(lastName);

    const email = screen.getByLabelText(/Email/);
    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.blur(email);

    const tel = screen.getByLabelText(/Phone number/);
    fireEvent.change(tel, { target: { value: "1231234123" } });
    fireEvent.blur(tel);

    const occasion = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasion, { target: { value: "Birthday" } });
    fireEvent.blur(occasion);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleFormSubmit).toHaveBeenCalledWith({
      fName: "test",
      lName: "test",
      email: "test@test.com",
      tel: "1231234123",
      date: today,
      time: availableTimes[0],
      occasion: "Birthday",
      comments: "",
      preference: "",
      guests: 1,
    });
  });
});
