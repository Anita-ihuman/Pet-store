import React from "react";
import { slide as Menu } from "react-burger-menu";
import { withRouter, Link } from "react-router-dom";
import './Burger.css'

const Burger = (props) => {
  return (
    <Menu {...props}>
      <Link className="nav-link" to={"/login"}>
        Login
      </Link>
      <Link className="nav-link" to={"/"}>
        Home
      </Link>

      <Link className="nav-link" to={"./petChoice"}>
        Pets store
      </Link>
      <Link className="nav-link" to={"/about"}>
        About us
      </Link>
      <Link className="nav-link" to={"/contact"}>
        Contact Us
      </Link>
    </Menu>
  );
};
export default withRouter(Burger);
