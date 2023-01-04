import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in and redirect to the homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created new account and log in and redirect to the homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      {/* <h1> I am login page from the Login Component</h1> */}

      <img
        className="login_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREVyQ-pQ4CB6MrZIiFz8_Fx5poZVjr32LHRA&usqp=CAU"
        alt="random"
      />
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Login</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>By signing in , You agree to our terms and conditions</p>
        <button onClick={register} type="text" className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
