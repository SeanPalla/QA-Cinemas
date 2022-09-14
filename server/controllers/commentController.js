// Access the database in the db.js
require('../models/db');
const Comment = require('../models/comment');
CommentNotFoundError = require('../error/CommentNotFoundError');

//Read All comments
exports.listComments = async(req, res) => {
    try{
        const comments = await Comment.find();
        res.json(comments);
    }catch(err){
        res.status(400).json({message: err})  // Add custom error handler to be more clear about the issue
    }
};

//Create a comment
exports.insertComment = async(req, res) => {
    const newComment = new Comment ({
        comment_id: req.body.comment_id,
        user_id: req.body.user_id,
        comment: req.body.comment,
        rating: req.body.rating,
        movie_id: req.body.movie_id
    });
    try{
        await newComment.save();
        res.json(newComment);
    }catch(err){
        const {message:errors } = err;
        res.status(400).json( { message: `Error occured on ${errors}`}); // Add custom error handler to be more clear about the issue
    }
};
//Update a comment by Id
exports.updateComment = async(req, res, next) => {
    let paramID = req.params.id;
    let { userName, comment, rating} = req.body;
    try{
        const updateComment = await Comment.updateOne({_id: paramID}, { userName, comment, rating});
        if (updateComment){
            res.status(200).json(updateComment);
        }else{
            next(new CommentNotFoundError(request.params.id));
        }
    } catch (err) {
        const {message:errors } = err;
        res.status(400).json( { message: `Error occured on ${errors}`}); // Add custom error handler to be more clear about the issue
    }
};

//Delete a comment by Id
exports.deleteSingleComment = async(req, res, next) => {
    let paramID = req.params.id;
    try{
        const deleteComment = await Comment.deleteOne({_id: paramID});
        if (deleteComment){
            res.status(200)
            .json(deleteComment);
        }else{
            next(new CommentNotFoundError(request.params.id));
        }
    } catch (err){
        const {message:errors } = err;
        res.status(400).json( { message: `Error occured on ${errors}`}); // Add custom error handler to be more clear about the issue
    }
};

// Search by Rating in Comments
exports.searchSingleComment = async(req, res) => {
    let paramRating = req.params.rating;
    try{
        const madeComment = await Comment.find({"rating" : paramRating});
        if (madeComment){
            res.status(200).json(madeComment);
        }else{
            res.status(400).json( { message: "comment rating not found" });
        }
    }catch (err){
        const {message:errors } = err;
        res.status(400).json( { message: `Error occured on ${errors}`}); // Add custom error handler to be more clear about the issue
    }
};