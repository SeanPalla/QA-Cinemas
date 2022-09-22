import React from "react";
import "./OpeningTimes.css";
import Container from "react-bootstrap/Container";
import { BsFillClockFill } from "react-icons/bs";

const OpeningHours = () => {
    return (
        <Container>
            <br></br>
            <h1 className="h1-opening-hours">
                {" "}
                <BsFillClockFill /> Opening Times{" "}
            </h1>
            <br></br>
            <div className="openingDiv">
                <h6 className="h6-opening-hours"> Monday - 9:00am-10:00pm </h6>
                <h6 className="h6-opening-hours"> Tuesday - 9:00am-10:00pm </h6>
                <h6 className="h6-opening-hours">
                    {" "}
                    Wednesday - 9:00am-10:00pm{" "}
                </h6>
                <h6 className="h6-opening-hours">
                    {" "}
                    Thursday - 9:00am-10:00pm{" "}
                </h6>
                <h6 className="h6-opening-hours"> Friday - 9:00am-10:00pm </h6>
                <h6 className="h6-opening-hours">
                    {" "}
                    Saturday - 10:00am-10:00pm{" "}
                </h6>
                <h6 className="h6-opening-hours"> Sunday - 11:00am-10:00pm </h6>
            </div>
        </Container>
    );
};

export default OpeningHours;
