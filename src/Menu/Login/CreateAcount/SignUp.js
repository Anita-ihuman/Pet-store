import React, { useState } from "react";
// styling
import "./SignUp.css";
import { Link } from "react-router-dom";
import Burger from "../../../Nav/Buger/Burger";

// const SignUp = () => {
//   return (
//     <div className="form-comp cfb">
//       <h1>Create an Account!</h1>
//       <form className="sign-up-form cfb">
//         <label>
//           Name:
//           <br />
//           <input />
//         </label>
//         <label>
//           Email:
//           <br />
//           <input />
//         </label>
//         <label>
//           Password:
//           <br />
//           <input />
//         </label>
//         <br />
//         <button>Sign Up!</button>
//       </form>
//     </div>
//   );
// };
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email,password);
  };
  return (
    <>
      <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />;
      <article
        className="Container cfb"
        style={{
          margin: "50px auto",
        }}
      >
        <form className="sign-up-form cfb" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder="Enter name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Name :</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Password :</label>
            <input
              type="text"
              name="Password"
              id="Password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <Link className="nav-link" to={"./signup"}>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </Link>
        </form>
      </article>
    </>
  );
};
export default SignUp;
