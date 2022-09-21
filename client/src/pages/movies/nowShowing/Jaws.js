export default function Jaws() {
  return (
    <div>
      <h1 className="movieTitle">Jaws</h1>
      <h2 className="dateRatingLength"> </h2>
      <img className="movieImage" src="" alt="" />
      <iframe
        className="movieTrailer"
        title="jaws"
        width="420"
        height="315"
        scr="link"></iframe>
      <p className="Director"></p>
      <p className="Actors"></p>
      <p className="Desc"></p>
      <p className="rating"></p>
    </div>
  );
}
