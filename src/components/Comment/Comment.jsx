/* eslint-disable react/prop-types */
import "./Comment.css"
export default function Comment({ comment: { id, name, email, body } }) {
  return (
    <div className="comment__card">
      <h2>{name}</h2>
      <h6>ID: {id}</h6>
      <p>Email: {email}</p>
      <p>Comment: {body}</p>
    </div>
  );
}
