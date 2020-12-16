import React from "react";
import { slide as Menu } from "react-burger-menu";
import { withRouter, Link } from "react-router-dom";

const Burger = (props) => {
  return (
    <Menu {...props}>
      <Link className="menu-item" href="./petChoice">
        Pets
      </Link>
      <Link className="menu-item" href="/">
        Home
      </Link>
      <Link className="nav-link" to={"/login"}>
        Login
      </Link>
      <Link className="nav-link" to={"/about"}>
        About
      </Link>
      <Link className="nav-link" to={"/contact"}>
        Contact Us
      </Link>
    </Menu>
  );
};
export default withRouter(Burger);
