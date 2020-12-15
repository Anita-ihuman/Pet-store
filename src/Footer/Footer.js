import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="foot">
      <p>
        Created by :<span>Anita Ihuman</span>
      </p>
      <div className="icons">
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "rgb(0, 0, 0)" } }}
        >
          <div className="iconix">
            <FaTwitter href="https://twitter.com/Anita_ihuman" />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "rgb(0, 0, 0)" } }}
        >
          <div className="iconix">
            <FaGithub href="https://github.com/Anita-ihuman" />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "rgb(0, 0, 0)" } }}
        >
          <div className="iconix">
            <FaLinkedin href="https://twitter.com/Anita_ihuman" />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
