import "../movieStyle.css";

export default function BlackAdam() {
  return (
    <div className="movieObject">
      <h1 className="movieTitle">Black Adam</h1>
      <h2 className="dateRatingLength"> 2022 . PG-13 . 2h 4m</h2>
      <h3 className="genre">Action, Fantasy, Sci-Fi</h3>
      <div className="imageandmovie">
        <img className="movieImage" src="static/images/Black_Adam.png" alt="" />
        <iframe
          className="movieTrailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X0tOpBuYasI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <p className="Director">Director: Jaume Collet-Serra</p>
      <p className="Actors">
        Actors: Viola Davis, Dwayne Johnson, Sarah Shahi{" "}
      </p>
      <p className="movieDesc">
        Nearly 5,000 years after he was bestowed with the almighty powers of the
        Egyptian gods-and imprisoned just as quickly-Black Adam (Johnson) is
        freed from his earthly tomb, ready to unleash his unique form of justice
        on the modern world.
      </p>
      <p className="rating"></p>
    </div>
  );
}
