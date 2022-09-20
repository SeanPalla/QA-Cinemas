import React from "react";
import "./Screens.css";
import Container from "react-bootstrap/Container";
import Pdf from "./ScreensExtras/QA-Cinema.pdf";

const Screens = () => {
  return (
    <Container>
      <div>
        <br></br>
        <h1 className="h1-screens"> Our Screens </h1>
        <br></br>

        <p className="p-screens">
          {" "}
          We offer two different screen sizes depending on your preference. All
          screens are capable of screening both New Releases, or movies on DVD/
          Blu-Ray. Our more luxorious choice, being the "Directors Box" offers
          free beverages which include either Coca-Cola or Fanta-Peach.
        </p>
        <br></br>
      </div>

      <div id="csvData">
        <h3>
          <span>Standard Screen</span>
        </h3>
        <img
          className="img-screens"
          alt="Deluxe Seating"
          src={require("./ScreensExtras/StandardSeatingPlan.png")}
        />
      </div>

      <div id="csvData">
        <h3>
          <span>Directors Box</span>
        </h3>
        <img
          className="img-screens"
          alt="Deluxe Seating"
          src={require("./ScreensExtras/DeluxeSeatPlan.png")}
        />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <div id="csvData">
        <h3>
          <span>Standard Screen</span>
        </h3>
        <img
          className="img-screens"
          alt="Standard Seating"
          src={require("./ScreensExtras/Standard.jpg")}
        />
        <p className="p-screens">
          Standard Screen (220 seats) takes our guests on a journey through the
          time to what cinemas once were with dramatic vaulted ceiling and the
          iconic seats, but in grey, with a slight addition of modernisation
          from the current age of time, having walls being sound proof and very
          comfortable seats, so our guests can enjoy the movies even more!
          Nobody likes back problems, do they?
        </p>
      </div>

      <div id="csvData">
        <h3>
          <span>Directors Box</span>
        </h3>
        <img
          className="img-screens"
          alt="Deluxe Seating"
          src={require("./ScreensExtras/Deluxe.jpg")}
        />
        <p className="p-screens">
          Directors Box Screen (165 seats) is the ultimate VIP experience a
          person could ever ask for! Our seats are embedded with the latest
          advanced memory foam back support cushions with beverages being
          dlivered every half an hour for our guests.
        </p>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <h6 className="h6-screens">
          * Please read these Terms and Conditions carefully before attending
          our cinema. By accessing our cinema, you agree to be bound by these
          Terms and Conditions. If you do not agree to those Terms and
          Conditions of this agreement, then you may not access the cinema
          and/or be kicked out if found violating any of the Terms and
          Conditions.
        </h6>
      </div>

      <div id="wrapper">
        <a href={Pdf} without rel="noopener noreferrer" target="_blank">
          <button trailingIcon="picture_as_pdf" label="Resume">
            TERMS AND CONDITIONS
          </button>
        </a>
      </div>

      <br></br>
      <br></br>
    </Container>
  );
};

export default Screens;