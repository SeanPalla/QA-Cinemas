import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "./comments.css";
import Axios from "axios";

const Comments = ({ currentUserId = null }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  // Filter the data looking for data is a parentID equal to null
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  // Use Axion call instead to add user
  const addComment = (text, parentId) => {
    const textInfo = text;
    // need to add user_id and username instead of constant
    const userId = window.sessionStorage.getItem("id") || null;
    const username = window.sessionStorage.getItem("name") || null;
    Axios.post("http://localhost:5000/api/comments", {
      userId,
      textInfo,
      username,
      parentId,
    })
      .then((comment) => {
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // Use Axion call instead to update user
  const updateComment = (text, commentId) => {
    console.log("Comment ID =", commentId);
    Axios.put(`http://localhost:5000/api/comments/${commentId}`, {
      textInfo: text,
    }).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment._id === commentId) {
          return { ...backendComment, textInfo: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  // Use Axion call instead
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      Axios.delete(`http://localhost:5000/api/comments/${commentId}`).then(
        () => {
          const updatedBackendComments = backendComments.filter(
            (backendComment) => backendComment._id !== commentId
          );
          setBackendComments(updatedBackendComments);
        }
      );
    }
  };

  // Use Axion call instead like Watchlist
  useEffect(() => {
    Axios.get("http://localhost:5000/api/comments").then((res) => {
      setBackendComments(res.data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write a comment</div>
      {/* disable comment form if currentUser = null*/}
      <CommentForm
        className="commentFormButton"
        submitLabel="Write"
        handleSubmit={addComment}
      />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
