/* eslint-disable react/prop-types */
import Post from "../../components/Post/Post";
import "./Posts.css";

export default function Posts({ postsData, postsError }) {
  postsData.length = 15;
  return (
    <div className="posts">
      <div className="posts__heading">
        <h1>Posts</h1>
      </div>
      <div className="posts__content">
        {postsError ? (
          <h1 className="error">{postsError}</h1>
        ) : (
          postsData.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
