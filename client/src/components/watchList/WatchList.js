import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./style-watchlist.css";
import axios from "axios";

export default function WatchList() {
    const [moviesData, setMovies] = useState([]);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/movies") //CHANGE BACK TO 5000 BEFORE PUSHING
            .then((res) => {
                console.log(res.data.movies);
                setMovies(res.data.movies);
            })
            .catch((err) => {
                console.log("Error detected in pull of data");
            });
    }, []);

    return (
        <div className="container-watchList">
            <h2>Now Showing</h2>
            <Slider {...settings}>
                {moviesData.map((item) => {
                    const relDate = new Date(item.releaseDate).valueOf();
                    const currentDate = new Date().valueOf();
                    if (relDate <= currentDate) {
                        return (
                            <div className="card-div">
                                <Card key={item._id} item={item} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </Slider>
            <h2>Upcoming Releases</h2>
            <Slider {...settings}>
                {moviesData.map((item) => {
                    const relDate = new Date(item.releaseDate).valueOf();
                    const currentDate = new Date().valueOf();
                    if (relDate >= currentDate) {
                        return (
                            <div className="card-div">
                                <Card key={item._id} item={item} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </Slider>
        </div>
    );
}
