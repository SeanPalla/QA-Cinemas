const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    comment_id: {
        type:Number,
        unique: true,
        required: true,
    }, // custom Primary key was added to allow easier identidication
    comment:{
        type:String,
        required: true,
        maxLength: 300,
        trim: true,
    },
    dateCreated: {
        type:Date,
        default: Date.now(),
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
        min:0,
        max:5,
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    }
});
module.exports = mongoose.model("Comment", commentSchema);