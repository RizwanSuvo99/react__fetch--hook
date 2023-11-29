/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./User.css";
export default function User({ user: { id, name, username, email } }) {
  return (
    <div className="users__card">
      <div className="users__img">
        <img
          src={
            "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
          }
          alt="img"
        />
      </div>
      <div className="users__details">
        <h1>{name}</h1>
        <h6>ID: {id}</h6>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}
