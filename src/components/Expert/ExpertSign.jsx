import React from "react";
import { Link } from "react-router-dom";

const ExpertSign = () => {
  return (
    <div>
      <div className="sign">
        <h1 className="title">Continue as an Expert</h1>

        <div className="choices">
          <div className="choice">
            <h3>Log In</h3>
            <input type="email" placeholder="Email" className="input1" />
            <input type="password" placeholder="Password" className="input1" />

            <Link to="/expert/notifications">
              <button className="btn1">Log In</button>
            </Link>
          </div>

          <div class="vl" />

          <div className="choice">
            <h3>Sign Up</h3>
            <input type="text" placeholder="Full Name" className="input1" />
            <input type="email" placeholder="Email" className="input1" />
            <input type="password" placeholder="Password" className="input1" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input1"
            />

            <Link to="/expert/fill-personal-information">
              <button className="btn2">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSign;
