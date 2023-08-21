import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  let [username, setUserName] = useState();
  let [password, setPassword] = useState();
  let [warning, setWarning] = useState();
  let [success, setSuccess] = useState();

  async function authenticate(e) {
    e.preventDefault();
    // console.log("details "+typeof username, typeof password);
    try {
      console.log("details " + username, password);
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });

      console.log(response.data.id);
      localStorage.setItem("user", JSON.stringify(response.data));
      setSuccess("Login Successful");
      setWarning("");
      window.location.href = "/";
    } catch (err) {
      setWarning(err.response.data.message);
      setSuccess("");
      console.log(err.response.data);
    }
  }

  return (
    <section className="container">
      <div id="signup-form">
        <form id="signup" onSubmit={authenticate}>
          <p className="welcome-wish margin">Welcome back! 👋</p>
          <h1 className="heading margin">Sign up to your account</h1>

          <div className="label">Username</div>
          <div className="input">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="label">Password</div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" id="submit-button">
            CONTINUE
          </button>
          {warning && <p className="warning-message">{warning}</p>}
          {success && <p className="success">{success}</p>}
        </form>
      </div>
      <h5 className="already-account">
        Don't have an account? <span>Sign up</span>
      </h5>
    </section>
  );
};

export default Login;
