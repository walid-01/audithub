import React from "react";
import StartupSidebar from "./StartupSidebar";
import { Link } from "react-router-dom";

const StartupSearchResults = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="explore-content">
        <h1 style={{ marginBottom: "50px" }}>Search Results</h1>
        <div className="experts-row">
          <Link to="/startup/explore/expert" className="black-link">
            <div className="expert-card">
              <div className="expert-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Expert 1</h2>
              <h3>Prosfession</h3>
              <h3>Address</h3>
            </div>
          </Link>
          <Link to="/startup/explore/expert" className="black-link">
            <div className="expert-card">
              <div className="expert-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Expert 2</h2>
              <h3>Prosfession</h3>
              <h3>Address</h3>
            </div>
          </Link>
          <Link to="/startup/explore/expert" className="black-link">
            <div className="expert-card">
              <div className="expert-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Expert 3</h2>
              <h3>Prosfession</h3>
              <h3>Address</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupSearchResults;
