import BookingForm from "./BookingForm";
import "../../stylesheets/booking.css";

export default function BookingPage(props) {
  return (
    <main className="bookingPage">
      <section id="heroSectionBooking">
        <div className="heroLeft">
          <div className="heroHeaderCont">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p className="heroText">
            Please enter you details and reserve a table with us!
          </p>
        </div>
        <div className="heroImgContBooking">
          <img
            alt="Location "
            src={require("../../images/icons_assets/restaurant.jpg")}
          />
        </div>
      </section>
      <BookingForm
        availableTimes={props.availableTimes}
        updateTimes={props.updateTimes}
        passBookingInfo={props.passBookingInfo}
      />
    </main>
  );
}
