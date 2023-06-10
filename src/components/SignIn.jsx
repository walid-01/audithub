import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./style/SignIn.css";

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div className="choices">
        <div className="choice">
          <Link to="/startup/sign">
            <button className="btn1">Continue as a Company</button>
          </Link>
        </div>

        <div class="vl"></div>

        <div className="choice">
          <Link to="/expert/sign">
            <button className="btn2">Continue as an Expert</button>
          </Link>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignIn;
