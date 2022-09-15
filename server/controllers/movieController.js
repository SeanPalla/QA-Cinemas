require('../models/db');
const Movie = require('../models/movie');

exports.listMovies = async(req, res) => {
    let { limit = 4, page = 1, genre, q } = req.query;

    const limitRecords = parseInt(limit);
    const skip = (page -1) * limit;

    let query = {};
    if(q) {
        query = {$text: {$search: q}};
    }
    if(genre) query.genre = genre;

    try {
        const movies = await Movie.find(query).limit(limitRecords).skip(skip);
        res.json({ page:page, limit:limitRecords, movies});
    } catch (err) {
        res.status(400).json( {message: err })
    } 
}

exports.insertSingleMovie = async(req, res) => {
    const newMovie = new Movie ({
        movieTitle: req.body.movieTitle,
        description: req.body.description,
        director: req.body.director,
        duration: req.body.duration,
        genre: req.body.genre,
        showingTimes: req.body.showingTimes,
        releaseDate: req.body.releaseDate,
        language: req.body.language,
        coverImage: req.body.coverImage
    });

    try {
        await newMovie.save();
        res.json(newMovie);
    } catch (err) {
        res.status(400).json( { message: err })
    }
}

exports.updateSingleMovie = async(req, res) => {
    let paramID = req.params.id;
    let { movieTitle, description, director, duration,
        genre, showingTimes, releaseDate, language, coverImage } = req.body
    
    try {
        const updateMovie = await Movie.updateOne({_id:paramID}, { movieTitle, description, director, duration,
            genre, showingTimes, releaseDate, language, coverImage });
        res.json(updateMovie);
    } catch (err) {
        res.status(400).json( { message: err })
    }
}

exports.deleteSingleMovie = async(req, res) => {
    let paramID = req.params.id;

    try {
        const deleteMovie = await Movie.deleteOne({_id:paramID});
        res.json(deleteMovie);
    } catch (err) {
        res.status(400).json( { message: err })
    }
}