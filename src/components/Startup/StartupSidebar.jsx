import React from "react";
import { Link } from "react-router-dom";

const StartupSidebar = () => {
  return (
    <div className="sidebar">
      <h3>Startup Menu</h3>
      <ul>
        <li>
          <Link to="/startup/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/startup/search">Search for an Expert</Link>
        </li>
        <li>
          <Link to="/startup/chat">Chat</Link>
        </li>
        <li>
          <Link to="/startup/company">My Company</Link>
        </li>
        <li>
          <Link to="/startup/explore">Explore</Link>
        </li>
        <li>
          <Link to="/startup/services-and-contracts">
            Services And Contracts
          </Link>
        </li>
        <li>
          <Link to="/startup/communication">Communication Space</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default StartupSidebar;
