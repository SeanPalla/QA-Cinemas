import "../movieStyle.css";

export default function HowToTrainADragon() {
  return (
    <div className="movieObject">
      <h1 className="movieTitle">How To Train Your Dragon</h1>
      <h2 className="dateRatingLength">2010 . PG . 1h 38m</h2>
      <h3 className="genre">Animation, Action, Adventure</h3>
      <div className="imageandmovie">
        <img className="movieImage" src="static/images/HowToTrainADragon.png" />
        <iframe
          className="movieTrailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oKiYuIsPxYk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <p className="Director">Dean DeBlois, Chris Sanders</p>
      <p className="Actors">
        Jay Baruchal, Gerard Butler, Christopher Mintz-Please
      </p>
      <p className="movieDesc">
        A hapless young Viking who aspires to hunt dragons becomes the unlikely
        friend of a young dragon himself, and learns there may be more to the
        creatures than he assumed.
      </p>
      <p className="rating"></p>
    </div>
  );
}
