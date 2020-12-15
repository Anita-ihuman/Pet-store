import React from "react";
import { slide as Menu } from "react-burger-menu";

const Burger = (props) => {
    return (
      
        <Menu {...props}>
          <a className="menu-item" href="./petChoice">
            Pets
          </a>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="nav-link" href={"/login"}>
            Login
          </a >
          <a className="nav-link" href={"/about"}>
          About
          </a >
          <a className="menu-item" href="/contact">
            Contact us
          </a>
        
        </Menu>
     
    );
};
export default Burger;
