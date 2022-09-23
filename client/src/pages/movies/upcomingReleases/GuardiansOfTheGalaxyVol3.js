import "../movieStyle.css";
export default function GuardiansOfTheGalaxyVol3() {
    return (
        <div className="movieObject">
            <h1 className="movieTitle">Guardians Of The Galaxy Vol 3</h1>
            <h2 className="dateRatingLength">2023</h2>
            <h3 className="genre"> Action - Adventure - Comedy</h3>
            <div className="imageandmovie">
                <img
                    className="movieImage"
                    src="static/images/GardianOftheGalaxy.png"
                    alt="GOTG Poster"
                />
                <iframe
                    className="movieTrailer"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dW1BIid8Osg?start=2"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <p className="Director">Director: James Gunn</p>
            <p className="Actors">
                Actors: Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel,
                Bradley Cooper, Will Poulter, Karen Gillan, Pom Klementieff,
                Sylvester Stallone
            </p>
            <p className="movieDesc">
                Still reeling from the loss of Gamora, Peter Quill rallies his
                team to defend the universe and one of their own - a mission
                that could mean the end of the Guardians if not successful.
            </p>
            <p className="rating"></p>
        </div>
    );
}
