function initializeTimes() {
  return [
    { time: "17:00", available: true },
    { time: "18:00", available: true },
    { time: "19:00", available: false },
    { time: "20:00", available: true },
    { time: "21:00", available: false },
    { time: "22:00", available: true },
  ];
}

function updateTimes(time) {
  const initialState = [
    { time: "17:00", available: true },
    { time: "18:00", available: true },
    { time: "19:00", available: true },
    { time: "20:00", available: true },
    { time: "21:00", available: true },
    { time: "22:00", available: true },
  ];

  return initialState.map((timeSlot) => {
    if (timeSlot.time === time) {
      return { ...timeSlot, available: false };
    } else {
      return timeSlot;
    }
  });
}

export { initializeTimes, updateTimes };
