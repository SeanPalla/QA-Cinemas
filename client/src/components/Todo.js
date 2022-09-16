import React from "react";
import "./nearbystyles.css";

export default function Todo(props) {
    return (
        <div className="object">
            <p className="Title">{<h3>{props.name}</h3>}</p>
            <img className="Image" src={props.image} alt={props.alttext} />
            <p className="desc">{props.desc}</p>
            <p className="info">{props.info}</p>
        </div>
    );
}
