import "../movieStyle.css";
export default function AvatarTheWayOfTheWater() {
    return (
        <div className="movieObject">
            <h1 className="movieTitle">Avatar The Way Of The Water</h1>
            <h2 className="dateRatingLength">2022</h2>
            <h3 className="genre"> Action - Adventure - Fantasy</h3>
            <div className="imageandmovie">
                <img
                    className="movieImage"
                    src="static/images/Avatar.png"
                    alt="Avatar Poster"
                />
                <iframe
                    className="movieTrailer"
                    src="https://www.youtube.com/embed/NZrX_ES93JA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <p className="Director"> Director: James Cameron</p>
            <p className="Actors">
                Actors: Zoe Saldana, Michelle Yeoh, Kate Winslet, Sam
                Worthington, Sigourney Weaver, Oona Chaplin
            </p>
            <p className="movieDesc">
                Jake Sully lives with his newfound family formed on the planet
                of Pandora. Once a familiar threat returns to finish what was
                previously started, Jake must work with Neytiri and the army of
                the Na'vi race to protect their planet.
            </p>
            <p className="rating"></p>
        </div>
    );
}
