import { useEffect, useState } from "react";

export default function BookingForm({
  availableTimes,
  updateTimes,
  passBookingInfo,
}) {
  const [formDate, setFormDate] = useState(null);
  const [formTime, setFormTime] = useState(null);
  const [formGuests, setFormGuests] = useState("1");
  const [formOccasion, setFormOccasion] = useState(null);

  const [formTimesOptions, setFormTimeOptions] = useState(null);

  const [formDateErr, setFormDateErr] = useState("");
  const [formTimeErr, setFormTimeErr] = useState("");
  const [formGuestsErr, setFormGuestsErr] = useState("");
  const [formOccasionsErr, setFormOccasionErr] = useState("");

  useEffect(() => {
    let timesArr = availableTimes.map((timeSlot) => {
      if (timeSlot.available) {
        return <option key={timeSlot.time}>{timeSlot.time}</option>;
      } else {
        return (
          <option
            key={timeSlot.time}
            disabled
            style={{ backgroundColor: "pink" }}
          >
            {timeSlot.time}
          </option>
        );
      }
    });

    setFormTimeOptions(timesArr);
  }, [availableTimes]);

  function handleSubmit() {
    let isErr = false;
    if (!formDate || formDate == null) {
      setFormDateErr("*Please enter a valid date.");
      isErr = true;
    }

    if (!formTime || formTime == null) {
      setFormTimeErr("*Please select a valid time.");
      isErr = true;
    }

    if (
      !formGuests ||
      formGuests == null ||
      formGuests > 10 ||
      formGuests < 1
    ) {
      setFormGuestsErr("*Please input between 1 to 10 guests.");
      isErr = true;
    }

    if (!formOccasion || formOccasion === null) {
      setFormOccasionErr("*Please choose an occasion.");
      isErr = true;
    }

    if (isErr) {
      return;
    } else {
      updateTimes(formTime);
      passBookingInfo({
        date: formDate,
        time: formTime,
        guests: formGuests,
        occasion: formOccasion,
      });
      return;
    }
  }
  return (
    <form id="bookingFormCont">
      <label htmlFor="formDate">Choose a Date</label>
      <input
        type="date"
        id="formDate"
        onChange={(e) => {
          setFormDate(e.target.value);
        }}
      ></input>
      <p className="formErr">{formDateErr}</p>
      <label htmlFor="formTime">Choose a Time</label>
      <select
        id="formTime"
        defaultValue={null}
        onChange={(e) => {
          setFormTime(e.target.value);
        }}
      >
        <option value={null} hidden>
          Choose Time
        </option>
        {formTimesOptions}
      </select>
      <p className="formErr">{formTimeErr}</p>
      <label htmlFor="formGuests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="formGuests"
        onChange={(e) => {
          setFormGuests(e.target.value);
        }}
      ></input>
      <p className="formErr">{formGuestsErr}</p>
      <label htmlFor="formOccasion">Occasion</label>
      <select
        id="formOccasion"
        defaultValue={null}
        onChange={(e) => {
          setFormOccasion(e.target.value);
        }}
      >
        <option value={null} hidden>
          Choose Occasion
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Memorial</option>
        <option>Work Event</option>
        <option>Children's</option>
        <option>Other</option>
      </select>
      <p className="formErr">{formOccasionsErr}</p>
      <button
        aria-label="On Click"
        className="yellowButton bookingSubmitButton"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
    </form>
  );
}
