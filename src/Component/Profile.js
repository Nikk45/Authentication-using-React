import React, { useEffect, useState } from "react";

const Profile = () => {
  let [userDetails, setUserDetails] = useState();

  let user = JSON.parse(localStorage.getItem("user"));

  console.log(user);
  useEffect(() => {
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userDetails", JSON.stringify(data));
          setUserDetails(data);
        });
    }
  }, []);

  function logout() {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <div className="section">
      <div id="user-details">
        <h1>Profile</h1>
        <p>ID : {user.id}</p>
        <p>UserName : {user.username}</p>
        <p>Full Name : {user.firstName + " " + user.lastName}</p>
        <p>Gender : {user.gender}</p>
        <p>Email : {user.email}</p>
        <p>
          Image : <img src={user.image} alt="img" />
        </p>
        <p>Token : {user.token}</p>
      </div>
      <button onClick={logout}>Logout</button>{" "}
    </div>
  );
};

export default Profile;
