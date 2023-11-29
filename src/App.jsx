/* eslint-disable no-unused-vars */
import Users from "./pages/Users/Users";
import useFetchHook from "./utils/useFetchHook";
import "./App.css";
import Posts from "./pages/Posts/Posts";
import Comments from "./pages/Comments/Comments";
import Photos from "./pages/Photos/Photos";

function App() {
  const { fetchData: usersData, errorData: usersError } = useFetchHook(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { fetchData: postsData, errorData: postsError } = useFetchHook(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { fetchData: commentsData, errorData: commentsError } = useFetchHook(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const { fetchData: photosData, errorData: photosError } = useFetchHook(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <div>
      <Photos photosData={photosData} photosError={photosError} />
      <Posts postsData={postsData} postsError={postsError} />
      <Comments commentsData={commentsData} commentsError={commentsError} />
      <Users usersData={usersData} usersError={usersError} />
    </div>
  );
}

export default App;
