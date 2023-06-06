import React from "react";
import StartupSidebar from "./StartupSidebar";
import "../style/Company.css";
import { Link } from "react-router-dom";

const StartupCompany = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="company-content">
        <h1>My Company</h1>
        <div className="company-project">
          <h2>Projects</h2>
          <div className="company-grp">
            <div className="company-card">
              <Link to="/startup/company/project-1" className="black-link">
                <div className="company-card-img">
                  <img
                    src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt=""
                  />
                </div>
                <h2>Project 1</h2>
                <h3>team 1</h3>
                <h3>start</h3>
                <h3>deadline</h3>
                <h3>progress</h3>
              </Link>
            </div>
            <div className="company-card">
              <Link to="/startup/company/project-1" className="black-link">
                <div className="company-card-img">
                  <img
                    src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt=""
                  />
                </div>
                <h2>Project 2</h2>
                <h3>team 2</h3>
                <h3>start</h3>
                <h3>deadline</h3>
                <h3>progress</h3>
              </Link>
            </div>
            <div className="company-card">
              <Link to="/startup/company/project-1" className="black-link">
                <div className="company-card-img">
                  <img
                    src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt=""
                  />
                </div>
                <h2>Project 3</h2>
                <h3>team 3</h3>
                <h3>start</h3>
                <h3>deadline</h3>
                <h3>progress</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="company-project">
          <h2>Team</h2>
          <div className="company-grp">
            <div className="team-card">
              <div className="company-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Name</h2>
              <h3>job title</h3>
              <h3>working on</h3>
              <h3>status</h3>
            </div>
            <div className="team-card">
              <div className="company-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Name</h2>
              <h3>job title</h3>
              <h3>working on</h3>
              <h3>status</h3>
            </div>
            <div className="team-card">
              <div className="company-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Name</h2>
              <h3>job title</h3>
              <h3>working on</h3>
              <h3>status</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCompany;
