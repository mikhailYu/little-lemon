import { useEffect, useState } from "react";
import SpecialPanel from "./SpecialPanel";
import { specialsList, testimonyList } from "./infoLists";
import "../../stylesheets/homePage.css";
import TestimonyPanel from "./TestimonialPanel";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
  const [specials, setSpecials] = useState("");
  const [testimonies, setTestimonies] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getSpecials();
    getTestimonies();
  }, []);

  function getSpecials() {
    let newArr = specialsList.map((special) => {
      return <SpecialPanel key={special.itemName} info={special} />;
    });

    setSpecials(newArr);
  }

  function getTestimonies() {
    let newArr = testimonyList.map((testi) => {
      return <TestimonyPanel key={testi.personName} info={testi} />;
    });

    setTestimonies(newArr);
  }

  return (
    <main className="homePageMain">
      <section id="heroSection">
        <div className="heroLeft">
          <div className="heroHeaderCont">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p className="heroText">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            aria-label="On Click"
            type="button"
            className="heroButton yellowButton"
            onClick={() => {
              navigate("/booking");
            }}
          >
            Reserve a Table
          </button>
        </div>
        <div className="heroImgCont">
          <img
            alt="some nice food"
            src={require("../../images/icons_assets/restauranfood.jpg")}
          />
        </div>
      </section>

      <section id="highlightsSection">
        <div className="hlHeaderComp">
          <h2> This weeks specials!</h2>
          <button type="button" className="hlButton yellowButton">
            Online Menu
          </button>
        </div>
        <div className="hlPanelsComp">{specials}</div>
      </section>

      <section id="testimonialsSection">
        <h2>Testimonials</h2>
        <div className="testiPanels">{testimonies}</div>
      </section>

      <section id="aboutSection">
        <div className="aboutLeftCont">
          <div className="aboutHeaders">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="aboutRightCont">
          <img
            className="aboutImgUnder"
            src={require("../../images/icons_assets/Mario and Adrian A.jpg")}
            alt="chef"
          />
          <img
            className="aboutImgUpper"
            src={require("../../images/icons_assets/Mario and Adrian b.jpg")}
            alt="chef"
          />
        </div>
      </section>
    </main>
  );
}
