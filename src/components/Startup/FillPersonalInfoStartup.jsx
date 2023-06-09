import React from "react";
import "../style/FillPersonalInfo.css";
import { Link } from "react-router-dom";

const FillPersonalInfoStartup = () => {
  return (
    <div id="fill-personal-info">
      <div id="fill-personal-info-form">
        <h1 style={{ marginBottom: "20px" }}>Please fill the fields below</h1>
        <input type="text" placeholder="Address" className="input1" />
        <input type="text" placeholder="Indusrty" className="input1" />
        <label for="profession" style={{ marginBottom: "10px" }}>
          Company type:
        </label>
        <select name="profession" style={{ marginBottom: "20px" }}>
          <option>Please select</option>
          <option>Startup</option>
          <option>Small / Medium</option>
          <option>Project Holder</option>
          <option>Large</option>
          <option>Other</option>
        </select>

        <label for="w3review" style={{ marginBottom: "5px" }}>
          Explain your needs
        </label>
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          placeholder="Explain what your company needs"
          style={{ marginBottom: "20px" }}
        />
        <Link to="/startup/confirm">
          <button className="btn2">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default FillPersonalInfoStartup;
