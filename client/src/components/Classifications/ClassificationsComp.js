import React from "react";
import { Link } from "react-router-dom";
import "./classifications.css";

export default function ClassificationsComp(props) {
    return (
        <>
            <div className="classifications-object">
                <p className="classifications-title">
                    {<h3>{props.classificationsName}</h3>}
                </p>
                <img
                    className="classifications-image"
                    src={props.classificationsImage}
                    alt={props.classificationsAlttext}
                />
                <p className="classifications-desc">
                    {props.classificationsDesc}
                </p>
                <a
                    className="classifications-link"
                    href="https://www.bbfc.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.classificationsLink}
                </a>
            </div>
        </>
    );
}
