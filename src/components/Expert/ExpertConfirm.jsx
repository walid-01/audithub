import { Link } from "react-router-dom";
import "../style/Confirm.css";

const ExpertConfirm = () => {
  return (
    <div className="confirm">
      <h1 style={{ marginBottom: "10px" }}>Confirm your email</h1>
      <p style={{ marginBottom: "10px" }}>
        To confirm your signup please enter the code sent to your email
      </p>
      <input
        type="text"
        style={{ marginBottom: "10px", padding: "2.5px" }}
        placeholder="Enter the code here"
      />
      <Link to="/expert/office">
        <button className="btn1">Confirm</button>
      </Link>
    </div>
  );
};

export default ExpertConfirm;
