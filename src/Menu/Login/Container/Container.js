import React, { useState } from "react";

import "./Container.css";

import SignIn from "../CreateAcount/SignUp";
import SignUp from "../login";

const Container = () => {
  const [welcome, setWelcome] = useState(false);

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"];
    if (welcome) classArr.push("send-right");
    return classArr.join(" ");
  };

  const setFormClass = () => {
    const classArr = ["form-side cfb"];
    if (welcome) classArr.push("send-left");
    return classArr.join(" ");
  };

  return (
    <div
      className="Container cfb"
      style={{
        margin: "50px auto",
      }}
    >
      <div className={setBannerClass()}>
        {welcome ? <h2>Hello, New Friend!</h2> : <h2>Welcome!!</h2>}

        <button onClick={() => setWelcome(!welcome)}>
          {welcome ? "Sign In" : "Create Account"}
        </button>
      </div>

      <div className={setFormClass()}>{welcome ? <SignUp /> : <SignIn />}</div>
    </div>
  );
};

export default Container;
