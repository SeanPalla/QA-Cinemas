import React from "react";
import "./FindUs.css";
import Container from "react-bootstrap/Container";
import GoogleMap from "./GoogleMap";
import { FaTrain } from 'react-icons/fa'
import { IoMdTrain } from 'react-icons/io'
import { BiAccessibility } from 'react-icons/bi'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillCar } from 'react-icons/ai'
import { AiOutlineWifi } from 'react-icons/ai'

const FindUs = () => {
  return (
    <Container maxWidth="md" className="beauty">

      <br></br>
      <h1> QA Cinema </h1>
      <br></br>

      <h6> 1st Floor </h6> 
      <h6> International House </h6>
      <h6> 1 St Katharines Way </h6>
      <h6> London </h6>
      <h6> E1W 1UN </h6>

      <br></br>
      <h6> Tel: 0345 074 7829 </h6>
      <h6> Fax: 0345 074 7830 </h6>

      <hr></hr>
      <br></br>
      <Container>
        <h1>Welcome</h1>
      </Container>

      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={"https://www.youtube.com/embed/VoPH6SoGbuM"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

      <hr></hr>
      <br></br>
      <Container>
        <h1> Where To Find Us </h1>
        <br></br>
        <GoogleMap></GoogleMap>
      </Container>

      <hr></hr>
      <br></br>
      <br></br>
      <h4>Local Information</h4>
      <br></br>
      <br></br>
      <br></br>

      <div id="csvData">
        <h3> <FaTrain />
          Train
        </h3>
        <p>Fenchurch Street (5 minute walk), London Bridge (15 minute walk),
        Liverpool Street (15 minute walk)</p>
      </div>

      <div id="csvData">
        <h3> <IoMdTrain />
          Tube
        </h3>
        <p>London Bridge (15 minute walk), Tower Hill (5 minute walk)</p>
      </div>

      <div id="csvData">
        <h3> <BiAccessibility />
          Acessibility
        </h3>
        <p>There's disability access, as the building has lifts going to all floors</p>
      </div>

      <div id="csvData">
        <h3> <AiFillClockCircle />
          Opening Hours
        </h3>
        <p>9:00am-10:00pm</p>
      </div>

      <div id="csvData">
        <h3> <AiFillCar />
          Parking
        </h3>
        <p>There's no onsite parking, however people can park at Minories Car Park</p>
      </div>

      <div id="csvData">
        <h3> <AiOutlineWifi />
          Technology 
        </h3>
        <p>WiFi, Portable Phone Chargers, WiFi-Printers</p>
      </div>

    </Container>
  );
};

export default FindUs;