import { Link } from "react-router-dom";

const StartupSign = () => {
  return (
    <div className="sign">
      <h1 className="title">Continue as a Startup</h1>

      <div className="choices">
        <div className="choice">
          <h3>Log In</h3>
          <input type="email" placeholder="Email" className="input1" />
          <input type="password" placeholder="Password" className="input1" />

          <Link to="/startup/company">
            <button className="btn1">Log In</button>
          </Link>
        </div>

        <div class="vl" />

        <div className="choice">
          <h3>Sign Up</h3>
          <input type="text" placeholder="Full Name" className="input1" />
          <input type="text" placeholder="Company Name" className="input1" />
          <input type="email" placeholder="Email" className="input1" />
          <input type="password" placeholder="Password" className="input1" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input1"
          />

          <Link to="/startup/fill-personal-information">
            <button className="btn2">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupSign;
