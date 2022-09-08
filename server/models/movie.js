const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieTitle: {
        type:String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true,  
    },
    showingTimes: {
        type: String,
        required: true,
        trim: true
    },
    releaseDate: {
        type: Date,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);
