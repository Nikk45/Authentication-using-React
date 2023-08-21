import React from "react";
import "./App.css";
import Profile from "./Component/Profile";
import Login from "./Component/Login";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));

  return user ? <Profile /> : <Login />;
}

export default App;
