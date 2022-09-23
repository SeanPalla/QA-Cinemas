export default function TicketToParadise() {
    return (
        <div className="movieObject">
            <h1 className="movieTitle">Ticket To Paradise</h1>
            <h2 className="dateRatingLength">2022 - PG-13 - 1h 44m</h2>
            <h3 className="genre"> Comedy - Romance</h3>
            <div className="imageandmovie">
                <img
                    className="movieImage"
                    src="static/images/Ticket To Paradise.png"
                    alt=""
                />
                <iframe
                    className="movieTrailer"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/hkP4tVTdsz8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <p className="Director">Director: Ol Parker</p>
            <p className="Actors">
                Actors: George Clooney, Sean Lynch, Julia Roberts, Arielle
                Carver-O'Neill
            </p>
            <p className="movieDesc">
                A divorced couple that teams up and travels to Bali to stop
                their daughter from making the same mistake they think they made
                25 years ago.
            </p>
            <p className="rating"></p>
        </div>
    );
}
