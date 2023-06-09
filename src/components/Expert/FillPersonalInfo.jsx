import React from "react";
import "../style/FillPersonalInfo.css";
import { Link } from "react-router-dom";

const FillPersonalInfo = () => {
  return (
    <div id="fill-personal-info">
      <div id="fill-personal-info-form">
        <h1 style={{ marginBottom: "20px" }}>Please fill the fields below</h1>
        <input type="text" placeholder="Profession" className="input1" />
        <input type="text" placeholder="Phone Number" className="input1" />
        <input type="text" placeholder="Address" className="input1" />
        <label for="profession" style={{ marginBottom: "10px" }}>
          What is your proffession:{" "}
        </label>
        <select name="profession" style={{ marginBottom: "20px" }}>
          <option>Please select</option>
          <option>Accounting expert</option>
          <option>Auditor</option>
          <option>Advisor</option>
          <option>Other</option>
        </select>
        <div style={{ marginBottom: "20px" }}>
          <p>Areas of expertises:</p>
          <div>
            <input type="checkbox" />
            <label> Option 1</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Option 2</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Option 3</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Other</label>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p>Provided Services:</p>
          <div>
            <input type="checkbox" />
            <label> Service 1</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Service 2</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Service 3</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Other</label>
          </div>
        </div>
        <p>Upload your photo</p>
        <input type="file" className="input1" />
        <Link to="/expert/confirm">
          <button className="btn2">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default FillPersonalInfo;
