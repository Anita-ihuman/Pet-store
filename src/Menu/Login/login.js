import React from "react";
import './Login.css'
import {Link } from "react-router-dom";
const Login = () => {
  return (
    <form className="form">
      <h3>SIGN IN</h3>

      <div className="form-group">
        <label>Email address:</label>
      </div>
      <input type="email" className="form-control" placeholder="Enter email" />
      <div className="form-group">
        <label>Password:</label>
      </div>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
        <Link className="nav-link" to={"./petChoice"}>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </Link>
      </div>
      <p className="forgot-password text-right">
        Forgot
        <a href="#">password?</a>
      </p>
    </form>
  );
};
export default Login
