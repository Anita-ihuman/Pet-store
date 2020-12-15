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
        created by :<span>Anita Ihuman</span>
      </p>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", color: "rgb(0, 123, 255)" } }}
      >
        <div>
          <FaTwitter href="https://twitter.com/Anita_ihuman" />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", color: "rgb(0, 123, 255)" } }}
      >
        <div>
          <FaGithub href="https://github.com/Anita-ihuman" />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", color: "rgb(0, 123, 255)" } }}
      >
        <div>
          <FaLinkedin href="https://twitter.com/Anita_ihuman" />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
