export default function HowToTrainADragon() {
    return (
        <div>
            <h1 className="movieTitle">How To Train Your Dragon</h1>
            <h2 className="dateRatingLength">2010 . PG . 1h 38m</h2>
            <h3 className="Genre">Animation, Action, Adventure</h3>
            <img
                className="movieImage"
                src="static/images/HowToTrainADragon.png"
                alt="Picture of how to train your dragon"
            />
            <iframe
                className="movieTrailer"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oKiYuIsPxYk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <p className="Director">Dean DeBlois, Chris Sanders</p>
            <p className="Actors">
                Jay Baruchal, Gerard Butler, Christopher Mintz-Please
            </p>
            <p className="Desc">
                A hapless young Viking who aspires to hunt dragons becomes the
                unlikely friend of a young dragon himself, and learns there may
                be more to the creatures than he assumed.
            </p>
            <p className="rating"></p>
        </div>
    );
}
