import "../movieStyle.css";
export default function GreatestBeerRunEver() {
    return (
        <div>
            <h1 className="movieTitle">Greatest Beer Run Ever</h1>
            <h2 className="dateRatingLength"> 2022 - R - 2h 6m</h2>
            <h3 className="genre"> Adventure - Comedy - Drama</h3>
            <img
                className="movieImage"
                src="static/images/GreatestBearRunEver.png"
                alt=""
            />
            <iframe
                className="movieTrailer"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RjAJsEprH_4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <p className="Director">Director: Peter Farelly</p>
            <p className="Actors">
                Actors: Zac Efron, Russell Crowe, Bill Murray, Kyle Allen, Jake
                Picking
            </p>
            <p className="movieDesc">
                A man's story of leaving New York in 1967 to bring beer to his
                childhood buddies in the Army while they are fighting in
                Vietnam.
            </p>
            <p className="rating"></p>
        </div>
    );
}
