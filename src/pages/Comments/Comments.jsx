/* eslint-disable react/prop-types */
import Comment from "../../components/Comment/Comment";
import "./Comments.css";

export default function Comments({ commentsData, commentsError }) {
  commentsData.length = 15;
  return (
    <div className="comments">
      <div className="comments__heading">
        <h1>Comments</h1>
      </div>
      <div className="comments__content">
        {commentsError ? (
          <h1 className="error">{commentsError}</h1>
        ) : (
          commentsData.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}
