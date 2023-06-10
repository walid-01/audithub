import ExpertSidebar from "./ExpertSidebar";
import "../style/Chat.css";
import { Link } from "react-router-dom";

const ExpertChat = () => {
  return (
    <div className="chat">
      <ExpertSidebar />
      <div className="notification-content">
        <h1>Chat</h1>
        <div className="notification-container">
          <Link to="/expert/chat/chat-1" className="black-link">
            <div className="notification">
              <p className="notif-text">Company 1</p>
            </div>
          </Link>
          <Link to="/expert/chat/chat-1" className="black-link">
            <div className="notification">
              <p className="notif-text">Company 2</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertChat;
