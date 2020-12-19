import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Burger from "../../Nav/Buger/Burger";

const Login = () => {
  return (
    <>
      <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />;
      <div className="form-comp cfb">
        <form className="sign-up-form cfb">
          <label>
            Email:
            <br />
            <input type="email" placeholder="Enter email" />
          </label>
          <label>
            Password:
            <br />
            <input type="password" placeholder="Enter password" />
          </label>
          <br />

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
            Forgot // <a href="#">password?</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
