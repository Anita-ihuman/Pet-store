import React from "react";
import { slide as Menu } from "react-burger-menu";
import {withRouter, Link } from "react-router-dom";

const Burger = (props) => {
    return (
      <Menu {...props}>
        <a className="menu-item" href="./petChoice">
          Pets
        </a>
        <a className="menu-item" href="/">
          Home
        </a>
        {/* <a className="nav-link" href={"/login"}>
          Login
        </a>
        <a className="nav-link" href={"/about"}>
          About
        </a>
        <a className="menu-item" href="/contact">
          Contact us
        </a> */}
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
