/* eslint-disable react/prop-types */
import "./Post.css";

export default function Post({ post: { id, title, body } }) {
  return (
    <div className="post__card">
      <h1>{title}</h1>
      <h6>
        <strong>ID: {id}</strong>
      </h6>
      <p>
        <strong>Content: </strong>
        {body}
      </p>
    </div>
  );
}
