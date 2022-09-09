const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true,
        trim: true,
    },
    comment:{
        type:String,
        required: true,
        maxLength: 300,
        trim: true
    },
    dateCreated: {
        type:Date,
        default: Date.now(),
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
        min:0,
        max:5,
    }
});
module.exports = mongoose.model("Comment", commentSchema);