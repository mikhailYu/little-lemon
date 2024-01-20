import HomePage from "./homePage/HomePage";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import BookingPage from "./bookingComps/BookingPage";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import ConfirmedBooking from "./bookingComps/ConfirmedBooking";

function reducer(state, action) {
  if (action.type === "initialize") {
    return action.times;
  }

  if (action.type === "bookTimeSlot") {
    return state.map((timeSlot) => {
      if (timeSlot.time === action.time) {
        return { ...timeSlot, available: false };
      } else {
        return timeSlot;
      }
    });
  }
  return state;
}

export default function Main(props) {
  const navigate = useNavigate();
  const [confirmedInfo, setConfirmedInfo] = useState(null);
  const initialState = [
    { time: "17:00", available: true },
    { time: "18:00", available: true },
    { time: "19:00", available: true },
    { time: "20:00", available: true },
    { time: "21:00", available: true },
    { time: "22:00", available: true },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  function updateTimes(time) {
    dispatch({ type: "bookTimeSlot", time: time });
  }

  function initializeTimes() {
    // await from api...
    const newTimes = [
      { time: "17:00", available: true },
      { time: "18:00", available: true },
      { time: "19:00", available: false },
      { time: "20:00", available: true },
      { time: "21:00", available: false },
      { time: "22:00", available: true },
    ];

    dispatch({ type: "initialize", times: newTimes });

    return newTimes;
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  function validBookingConfirmed(bookingInfo) {
    setConfirmedInfo(bookingInfo);
    navigate("/booking-confirmed");
  }

  return (
    <main className="mainCont">
      <Routes>
        <Route path="*" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              updateTimes={updateTimes}
              passBookingInfo={validBookingConfirmed}
            />
          }
        ></Route>
        <Route
          path="/booking-confirmed"
          element={<ConfirmedBooking info={{ confirmedInfo }} />}
        ></Route>
      </Routes>
    </main>
  );
}
