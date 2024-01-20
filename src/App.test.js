import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/bookingComps/BookingForm";
import Main from "./components/Main";
import { initializeTimes, updateTimes } from "./components/jestTests";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose a Date");
  expect(headingElement).toBeInTheDocument();
});

test("initilize times", () => {
  // render the App componen
  const expectTimes = [
    { time: "17:00", available: true },
    { time: "18:00", available: true },
    { time: "19:00", available: false },
    { time: "20:00", available: true },
    { time: "21:00", available: false },
    { time: "22:00", available: true },
  ];

  expect(initializeTimes()).toStrictEqual(expectTimes);
});

test("update Times", () => {
  // render the App componen
  const expectTimes = [
    { time: "17:00", available: true },
    { time: "18:00", available: false },
    { time: "19:00", available: true },
    { time: "20:00", available: true },
    { time: "21:00", available: true },
    { time: "22:00", available: true },
  ];

  expect(updateTimes("18:00")).toStrictEqual(expectTimes);
});
