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
        </div>
        <div className="search-form">
          <div id="fill-personal-info-form">
            <h1 style={{ marginBottom: "20px" }}>Search for an expert</h1>
            <input type="text" placeholder="Name" className="input1" />
            <input type="text" placeholder="Location" className="input1" />
            <label for="profession" style={{ marginBottom: "10px" }}>
              Profession:
            </label>
            <select name="profession" style={{ marginBottom: "20px" }}>
              <option>Please select</option>
              <option>Accounting expert</option>
              <option>Auditor</option>
              <option>Advisor</option>
              <option>Other</option>
            </select>

            <div style={{ marginBottom: "20px" }}>
              <p>Areas of expertises:</p>
              <div>
                <input type="checkbox" />
                <label> Option 1</label>
              </div>
              <div>
                <input type="checkbox" />
                <label> Option 2</label>
              </div>
              <div>
                <input type="checkbox" />
                <label> Option 3</label>
              </div>
              <div>
                <input type="checkbox" />
                <label> Other</label>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <p>Provided Services:</p>
              <div>
                <input type="checkbox" />
                <label> Service 1</label>
              </div>
              <div>
                <input type="checkbox" />
                <label> Service 2</label>
              </div>
              <div>
                <input type="checkbox" />
                <label> Service 3</label>
              </div>
              <div>
                <input type="checkbox" />
                <label> Other</label>
              </div>
            </div>
            <Link to="/startup/search-result">
              <button className="btn2">Search</button>
            </Link>
          </div>
        </div>
        <div className="experts">
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
          <div className="experts-row">
            <Link to="/startup/explore/expert" className="black-link">
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
            </Link>
            <Link to="/startup/explore/expert" className="black-link">
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
            </Link>
            <Link to="/startup/explore/expert" className="black-link">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupExplore;
