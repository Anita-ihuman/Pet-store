import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Burger from "../../Nav/Buger/Burger";
// const Login = () => {
//   return (
//     <div className="form-comp cfb">
//       <form className="sign-up-form cfb">
//         <label>
//           Email:
//           <br />
//           <input type="email" placeholder="Enter email" />
//         </label>
//         <label>
//           Password:
//           <br />
//           <input type="password" placeholder="Enter password" />
//         </label>
//         <br />

//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//           <Link className="nav-link" to={"./petChoice"}>
//             <button type="submit" className="btn btn-primary btn-block">
//               Submit
//             </button>
//           </Link>
//         </div>

//         <p className="forgot-password text-right">
//           Forgot // <a href="#">password?</a>
//         </p>
//       </form>
//     </div>
//   );
// };
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
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
          <p>Login</p>
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
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
          <div className="submit">
            <Link className="nav-link" to={"./petChoice"}>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </Link>
            <Link className="nav-link" to={"./signup"}>
              <button type="submit" className="btn btn-primary btn-block">
                Signup
              </button>
            </Link>
          </div>

          <p className="forgot-password text-right">
            Forgot // <a href="#">password?</a>
          </p>
        </form>
      </article>
    </>
  );
};
export default Login;
