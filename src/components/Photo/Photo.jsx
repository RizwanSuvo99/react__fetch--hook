/* eslint-disable react/prop-types */
import "./Photo.css";
export default function Photo({ photo: { id, title, url } }) {
  return (
    <div className="photo__card">
      <div className="photo__img">
        <img src={url} alt="" />
      </div>
      <h2>{title}</h2>
      <h6>ID: {id}</h6>
    </div>
  );
}
