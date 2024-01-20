import { useEffect, useState } from "react";
import "../../stylesheets/confirmBooking.css";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking({ info }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resOccassion, setResOccasion] = useState("");
  const [resPeople, setResPeople] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !info.confirmedInfo ||
      info.confirmedInfo.date === null ||
      info.confirmedInfo.time === null ||
      info.confirmedInfo.occasion === null ||
      info.confirmedInfo.guests === null
    ) {
      return;
    }

    setResDate(info.confirmedInfo.date);
    setResTime(info.confirmedInfo.time);
    setResOccasion(info.confirmedInfo.occasion);

    if (info.confirmedInfo.guests == 1) {
      setResPeople("1 person");
    } else {
      setResPeople(info.confirmedInfo.guests + " people");
    }

    return;
  }, [info]);

  return (
    <div className="confirmCont">
      <div className="confirmBox">
        <div className="confirmImgCont">
          <img src={require("../../images/icons_assets/toast.jpg")} />
        </div>
        <div className="confirmTextCont">
          <div className="confirmHeaderCont">
            <h2>Thank you for booking with us!</h2>
            <h3>Your reservation for {resPeople} has been confirmed. </h3>
          </div>
          <ul className="confirmUl">
            <li>
              <p>Date: {resDate}</p>
            </li>
            <li>
              <p>Time: {resTime}pm</p>
            </li>
            <li>
              <p>Occasion: {resOccassion}</p>
            </li>
          </ul>
          <button
            aria-label="On Click"
            className="yellowButton backToHome"
            type="button"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
