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
        <p>Upload your photo</p>
        <input type="file" className="input1" />

        <Link to="/expert/office">
          <button className="btn2">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default FillPersonalInfo;
