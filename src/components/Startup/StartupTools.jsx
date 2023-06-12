import React from "react";
import StartupSidebar from "./StartupSidebar";
import "../style/Tools.css";

const StartupTools = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="tools-content">
        <h1 style={{ fontSize: "50px" }}>Company Tools</h1>
        <h1>Let's get you started</h1>
        <h2 style={{ marginBottom: "20px" }}>Tools</h2>
        <div className="tools-container">
          <div className="tool">Tool 1</div>
          <div className="tool">Tool 2</div>
          <div className="tool">Tool 3</div>
        </div>
        <h2 style={{ marginBottom: "20px" }}>Tutorials</h2>
        <div className="tools-container">
          <div className="tool">Tutorial 1</div>
          <div className="tool">Tutorial 2</div>
          <div className="tool">Tutorial 3</div>
        </div>
        <h2 style={{ marginBottom: "20px" }}>Guides</h2>
        <div className="tools-container">
          <div className="tool">Guide 1</div>
          <div className="tool">Guide 2</div>
          <div className="tool">Guide 3</div>
        </div>
      </div>
    </div>
  );
};

export default StartupTools;
