import Comments from "../components/CommentUI/Comments";

export default function DiscussionBoard() {
    return (
        <div>
            <Comments currentUserId ={window.sessionStorage.getItem('id')} />
        </div>
    );
}
