import StartupSidebar from "./StartupSidebar";
import { Link } from "react-router-dom";

const StartupChat = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="notification-content">
        <h1>Chat</h1>
        <div className="notification-container">
          <Link to="/startup/chat/chat-1" className="notification black-link">
            <div>
              <p className="notif-text">Expert 1</p>
            </div>
          </Link>
          <Link to="/startup/chat/chat-1" className="notification black-link">
            <div>
              <p className="notif-text">Expert 2</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupChat;
