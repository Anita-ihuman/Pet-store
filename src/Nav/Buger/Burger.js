import React from "react";
import { slide as Menu } from "react-burger-menu";
import Footer from "../../Footer/Footer";

const Burger = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="./petChoice">
        Pets
      </a>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/login">
        Login
      </a>
      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
      <Footer />
    </Menu>
  );
};
export default Burger;
