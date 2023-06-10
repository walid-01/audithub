import React from "react";
import ExpertSidebar from "./ExpertSidebar";
import { Link } from "react-router-dom";

const ExpertChat1 = () => {
  return (
    <div className="content">
      <ExpertSidebar />
      <div className="chat1-content">
        <h1>Chat</h1>
        <div className="chatbox">
          <div className="chat-messages"></div>
          <div className="chat-send">
            <input
              type="text"
              placeholder="Send Message"
              className="send-input"
            />
            <button className="send-btn">Send</button>
          </div>
        </div>
        <Link to="/expert/missions" style={{ marginTop: "20px" }}>
          <button className="btn1">Request Contract</button>
        </Link>
      </div>
    </div>
  );
};

export default ExpertChat1;
