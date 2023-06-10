import ExpertSidebar from "./ExpertSidebar";
import "../style/Notifications.css";
import { Link } from "react-router-dom";

const ExpertNotifications = () => {
  return (
    <div className="notifications">
      <ExpertSidebar />
      <div className="notification-content">
        <h1>Notifications</h1>
        <div className="notification-container">
          <Link to="/expert/chat/chat-1" className="black-link">
            <div className="notification">
              <p className="notif-text">New message from company 1</p>
              <p className="notif-time">Today 14:34</p>
            </div>
          </Link>
          <div className="notification">
            <p className="notif-text">Work deadline approaching</p>
            <p className="notif-time">Yesterday 08:30</p>
          </div>
          <Link to="/expert/chat/chat-1" className="black-link">
            <div className="notification">
              <p className="notif-text">New message from company 2</p>
              <p className="notif-time">05/06/2023 16:00</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertNotifications;
