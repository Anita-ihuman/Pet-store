import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

const Burger = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="./">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/profile"
      >
        Login
      </NavLink>
    </Menu>
  );
};
export default Burger;
