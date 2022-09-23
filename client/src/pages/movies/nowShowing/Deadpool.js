import "../movieStyle.css";

export default function Deadpool() {
  return (
    <div className="movieObject">
      <h1 className="movieTitle">Deadpool</h1>
      <h2 className="dateRatingLength">2016 . 15 . 1h 148m </h2>
      <h3 className="genre">Action, Adventure, Comedy</h3>
      <div className="imageandmovie">
        <img className="movieImage" src="static/images/Deadpool.png" alt="" />
        <iframe
          className="movieTrailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xithigfg7dA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div className="infobox">
        <p className="Director">Director: Tim Miller</p>
        <p className="Actors">
          Actors: Ryan Reynolds, Morena Baccarin, T.J. Miller
        </p>
        <p className="movieDesc">
          A wisecracking mercenary gets experimented on and becomes immortal but
          ugly, and sets out to track down the man who ruined his looks.
        </p>
        <p className="rating"></p>
      </div>
    </div>
  );
}
