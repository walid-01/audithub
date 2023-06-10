import React from "react";
import StartupSidebar from "./StartupSidebar";
import "../style/Chat.css";
import { Link } from "react-router-dom";

const StartupChat1 = () => {
  return (
    <div className="content">
      <StartupSidebar />
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
        <Link to="/startup/chat/chat-1/pay" style={{ marginTop: "20px" }}>
          <button className="btn1">Request Contract</button>
        </Link>
      </div>
    </div>
  );
};

export default StartupChat1;
