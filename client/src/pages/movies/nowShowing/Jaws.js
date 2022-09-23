import "../movieStyle.css";

export default function Jaws() {
  return (
    <div className="movieObject">
      <h1 className="movieTitle">Jaws</h1>
      <h2 className="dateRatingLength">1975 . A . 2h 4m</h2>
      <h3 className="genre"> Adventure, Thriller</h3>
      <div className="imageandmovie">
        <img className="movieImage" src="static/images/Jaws.png" alt="" />
        <iframe
          className="movieTrailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U1fu_sA7XhE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <p className="Director">Director: Steven Spielberg</p>
      <p className="Actors">
        Actors: Roy Scheider, Robert Shaw, Richard Dreyfuss
      </p>
      <p className="movieDesc">
        When a killer shark unleashes chaos on a beach community off Cape Cod,
        it's up to a local sheriff, a marine biologist, and an old seafarer to
        hunt the beast down.
      </p>
      <p className="rating"></p>
    </div>
  );
}
