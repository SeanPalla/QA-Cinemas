import React from "react";

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "New Release";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    // {badgeText && <div className="card--badge">{badgeText}</div>}
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <a className="dataItem" href={props.item.hrefLink}>
                <img
                    src={`static/images/${props.item.coverImage}`}
                    className="card--image"
                    alt="movie-display"
                />
            </a>
            <div className="card--stats">
                <img
                    src={"static/images/red_star.png"}
                    className="card--star"
                    alt="star-display"
                />
                <span className="gray"> ({props.item.duration}) • </span>
                <span className="gray">{props.item.director}</span>
                <img
                    src={"static/images/red_star.png"}
                    className="card--star"
                    alt="star-display"
                />
            </div>
            <h2 className="card--title">{props.item.movieTitle}</h2>
            <p className="card--times">
                <span className="bold">Times: {props.item.showingTimes}</span>
            </p>
        </div>
    );
}
