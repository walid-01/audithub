import React from "react";
import { Link } from "react-router-dom";

const ExpertSidebar = () => {
  return (
    <div className="sidebar">
      <h3>Expert Menu</h3>
      <ul>
        <li>
          <Link to="/expert/office">My Office</Link>
        </li>
        <li>
          <Link to="/expert/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/expert/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/expert/missions">Missions</Link>
        </li>
        <li>
          <Link to="/expert/chat">Chat</Link>
        </li>
      </ul>
    </div>
  );
};

export default ExpertSidebar;
