import StartupSidebar from "./StartupSidebar";
import "../style/Explore.css";
import { Link } from "react-router-dom";

const StartupExplore = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="explore-content">
        <div className="explore-header">
          <h1>Explore available experts</h1>
          <button className="btn2">
            <Link to="/startup/search">Search</Link>
          </button>
        </div>
        <div className="explore-filters">
          <div className="filter-container">
            <h3>Filter by areas of expertises:</h3>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Option 1</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Option 2</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Option 3</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Other</label>
            </div>
          </div>
          <div className="filter-container">
            <h3>Filter by services:</h3>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Service 1</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Service 2</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Service 3</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <label> Other</label>
            </div>
          </div>
        </div>
        <div className="experts">
          <div className="experts-row">
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
          </div>
          <div className="experts-row">
            <div className="expert-card">
              <div className="expert-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Expert 4</h2>
              <h3>Prosfession</h3>
              <h3>Address</h3>
            </div>
            <div className="expert-card">
              <div className="expert-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Expert 5</h2>
              <h3>Prosfession</h3>
              <h3>Address</h3>
            </div>
            <div className="expert-card">
              <div className="expert-card-img">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt=""
                />
              </div>
              <h2>Expert 6</h2>
              <h3>Prosfession</h3>
              <h3>Address</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupExplore;
