import "../movieStyle.css";

export default function ShawshankRedemption() {
  return (
    <div className="movieObject">
      <h1 className="movieTitle">Shawshank Redemption</h1>
      <h2 className="dateRatingLength">1994 . 15 . 2h 22m</h2>
      <h3 className="genre"> Drama</h3>
      <div className="imageandmovie">
        <img
          className="movieImage"
          src="static/images/shawshankredemption.png"
          alt="Image of the shwshank remption movie"
        />
        <iframe
          className="movieTrailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6hB3S9bIaco"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <p className="Director">Director: Frank Darabont</p>
      <p className="Actors">Actors: Morgam Freeman, Tim Robbins, Bob Gunton</p>
      <p className="movieDesc">
        Two imprisoned men bond over a number of years, finding solace and
        eventual redemption through acts of common decency.
      </p>
      <p className="rating"></p>
    </div>
  );
}
