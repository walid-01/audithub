import ExpertSidebar from "./ExpertSidebar";
import "../style/Chat.css";

const ExpertChat = () => {
  return (
    <div className="chat">
      <ExpertSidebar />
      <div className="notification-content">
        <h1>Chat</h1>
        <div className="notification-container">
          <div className="notification cursor-pointer">
            <p className="notif-text">Company 1</p>
          </div>
          <div className="notification cursor-pointer">
            <p className="notif-text">Company 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertChat;
