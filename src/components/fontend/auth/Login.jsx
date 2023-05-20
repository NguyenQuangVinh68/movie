import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import imgLogo from "../../../assets/image/logo.svg";

function Login() {
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    list_err: [],
  });

  const handleInput = (e) => {
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.post("/login", data).then(({ data }) => {
      if (data.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", data.token);
        localStorage.setItem("user", data.user_name);

        swal("Success", data.message, "success");
        <Navigate to="/admin" />;
      } else if (data.status === 401) {
        swal("Warning", data.message, "warning");
      } else {
        setLogin({ ...loginInput, list_err: data.validator_err });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign__form">
      <a href="#" className="sign__logo">
        <img src={imgLogo} alt="" />
      </a>
      <div className="sign__group">
        <input
          type="email"
          name="email"
          onChange={handleInput}
          value={loginInput.email}
          className="sign__input"
          placeholder="Email"
        />
        <span className="error sign__text">{loginInput.list_err.email}</span>
      </div>
      <div className="sign__group">
        <input
          type="password"
          name="password"
          onChange={handleInput}
          value={loginInput.password}
          className="sign__input"
          placeholder="Password"
        />
        <span className="error sign__text">{loginInput.list_err.password}</span>
      </div>
      <div className="sign__group sign__group--checkbox">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          defaultChecked="checked"
        />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <button className="sign__btn" type="submit">
        Sign in
      </button>
      <span className="sign__text">
        Don't have an account? <Link to="/register">Register!</Link>
      </span>
      <span className="sign__text">
        <a href="forgot.html">Forgot password?</a>
      </span>
    </form>
  );
}

export default Login;
