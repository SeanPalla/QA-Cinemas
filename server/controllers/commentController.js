// Access the database in the db.js
require('../models/db');
const Comment = require('../models/comment');


//Read All comments
exports.listComments = async(req, res) => {
    try{
        const comments = await Comment.find();
        res.json(comments);
    }catch(err){
        res.status(400).json({message: err})
    }
};

// Need to vaalidate is a valid user
//Create a comment
exports.insertComment = async(req, res) => {
    const newComment = new Comment ({
        userName: req.body.userName,
        comment: req.body.comment,
        rating: req.body.rating
    });
    try{
        await newComment.save();
        res.json(newComment);
    }catch(err){
        res.status(400).json( { message: err })
    }
};
//Update a comment by Id
exports.updateComment = async(req, res) => {
    console.log("running update")
    let paramID = req.params.id;
    let { userName, comment, rating} = req.body;
    try{
        console.log("Reached");
        const updateComment = await Comment.updateOne({_id: paramID}, { userName, comment, rating});
        if (updateComment){
            res.status(200).json(updateComment);
        }else{
            res.status(400).json( { message: "username with comment not found" })
        }
    } catch (err) {
        res.status(400).json( {message:"Error occured on Patch ID"})
    }
};

//Delete a comment by Id
exports.deleteSingleComment = async(req, res) => {
    let paramID = req.params.id;
    try{
        const deleteComment = await Comment.deleteOne({_id: paramID});
        res.json(deleteComment);
    } catch (err){
        res.status(400).json( {message :err})
    }
};

// Search by para in Comments
exports.searchSingleComment = async(req, res, next) => {
    let paramRating = req.params.rating;
    console.log(paramRating);
    try{
        const madeComment = await Comment.find({"rating" : paramRating});
        if (madeComment){
            res.status(200).json(madeComment);
        }else{
            res.status(400).json( { message: "comment rating not found" });
        }
    }catch (err){
        res.status(400).json( { message: err })
    }
};