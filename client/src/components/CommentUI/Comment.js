import CommentForm from "./CommentForm";

const Comment = ({
  comment, 
  replies, 
  setActiveComment, 
  activeComment, 
  updateComment, 
  deleteComment, 
  addComment, 
  parentId = null, 
  currentUserId
}) => {
  
  // Added in truthy or falsey to allow editing to be allowed
  const isEditing =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "editing";
     // Added in truthy or falsey to allow replying to be allowed
  const isReplying =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "replying";
  // Add a 5 min on created at date
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.dateCreated) > fiveMinutes;
  // Added a truthy or falsey to allow deleting to be allowed
  const canDelete =
    currentUserId === comment.userId && replies.length === 0;
  // Can User perform certain actions
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId;
  const replyId = parentId ? parentId : comment._id;
  // Converted Date from mongooseDB to a localString for readability
  const dateCreated = new Date(comment.dateCreated).toLocaleDateString();


  return (
    <div key={comment._id} className="comment">
      <div className="comment-image-container">
        <img src={"static/images/user-image.png"} alt="user-icon"/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-datecreated">{dateCreated}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.textInfo}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            initialText={comment.textInfo}
            handleSubmit={(text) => updateComment(text, comment._id)}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;