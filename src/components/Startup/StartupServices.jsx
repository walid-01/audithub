import StartupSidebar from "./StartupSidebar";
import { Link } from "react-router-dom";
import "../style/Services.css";

const StartupServices = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="contract-content">
        <h1 style={{ fontSize: "50px" }}>Contracts</h1>
        <div className="contract-card">
          <h1>Expert Card</h1>
        </div>
        <div className="contract-card">
          <div className="contract-card-item">
            <h2>Calendar</h2>
            <img src="https://iili.io/H4ogRu1.png" alt="" />
          </div>
          <Link
            className="black-link contract-card-item"
            to="/startup/chat/chat-1"
          >
            <h2>Chat</h2>
          </Link>
        </div>
        <h1 className="contract-card">Mission Progress</h1>
        <div className="contract-card">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default StartupServices;
