const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    textInfo:{
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
        trim: true,
        min:0,
        max:5,
        default:null
    },
    userId:{
        type: Number,
        required: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        default: null
    },
    username:{
        type: String,
        required: true,
        trim: true,
    },
    parentId:{
        type: Schema.Types.ObjectId,
        ref: 'commentSchema',
        default: null,
    }
});
module.exports = mongoose.model("Comment", commentSchema);