import React from "react";
import "./nearbystyles.css";

export default function Todo(props) {
    return (
        <div className="nearby-object">
            <p className="nearby-title">{<h3>{props.nearbyName}</h3>}</p>
            <img
                className="nearby-image"
                src={props.nearbyImage}
                alt={props.nearbyAlttext}
            />
            <p className="nearby-desc">{props.nearbyDesc}</p>
            <p className="nearby-info">{props.nearbyInfo}</p>
        </div>
    );
}
