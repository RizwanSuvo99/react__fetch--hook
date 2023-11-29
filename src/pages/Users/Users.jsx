/* eslint-disable react/prop-types */
import User from "../../components/User/User";
import "./Users.css";

export default function Users({ usersData, usersError }) {
  return (
    <div>
      <div className="section__heading">
        <h1>Users</h1>
      </div>
      <div className="users">
        {usersError ? (
          <h1 className="error">{usersError}</h1>
        ) : (
          usersData.map((user) => <User key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}
