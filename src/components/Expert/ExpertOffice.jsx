import ExpertSidebar from "./ExpertSidebar";
import "../style/Office.css";
import { Link } from "react-router-dom";

const ExpertOffice = () => {
  return (
    <div className="office">
      <ExpertSidebar />
      <div className="office-content">
        <h1 className="content-title">My Office</h1>
        <div className="mission-card">
          <h2 className="card-title">Mission</h2>
          <div className="mission-container">
            <div className="mission">
              <p className="notif-text">
                Mission 1: client 1, type of mission: type 1
              </p>
              <p className="notif-time">05/06/2023</p>
            </div>
            <div className="mission">
              <p className="notif-text">
                Mission 2: client 2, type of mission: type 2
              </p>
              <p className="notif-time">15/06/2023</p>
            </div>
            <div className="mission">
              <Link to="/expert/missions">
                <p
                  className="notif-text black-link"
                  style={{ textDecoration: "underline" }}
                >
                  View All...
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-container1">
          <div className="card-border">
            <h2 className="card-title">Calendar</h2>
            <img
              src="https://iili.io/H4ogRu1.png"
              alt=""
              className="calendar-img"
            />
          </div>
          <div className="card-border">
            <h2 className="card-title">Checklist</h2>
            <div className="checklist">
              <div className="checklist-item">
                <p>This is the first task</p>
                <input type="checkbox" name="task" id="1" />
              </div>
              <div className="checklist-item">
                <p>This is the second task</p>
                <input type="checkbox" name="task" id="2" />
              </div>
              <div className="checklist-item">
                <p>This is the third task</p>
                <input type="checkbox" name="task" id="3" />
              </div>
            </div>
          </div>
        </div>
        <div className="messages-card">
          <h2 className="card-title">Unread Messages</h2>
          <div className="mission-container">
            <div className="mission">
              <p className="notif-text">Client 1: message from client 1</p>
              <p className="notif-time">10/06/2023</p>
            </div>
            <div className="mission">
              <p className="notif-text">Client 1: message from client 1</p>
              <p className="notif-time">20/06/2023</p>
            </div>
            <div className="mission">
              <Link to="/expert/chat">
                <p
                  className="notif-text black-link"
                  style={{ textDecoration: "underline" }}
                >
                  View All...
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="links-card">
          <div className="links-row">
            <p className="link">Clients</p>
            <p className="link">Contacts</p>
            <p className="link">Expert Space</p>
          </div>
          <div className="links-row">
            <p className="link">News</p>
            <p className="link">Personnel</p>
            <p className="link">Settings and Infos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertOffice;
