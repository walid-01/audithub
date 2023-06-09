import StartupSidebar from "./StartupSidebar";
import "../style/Search.css";
import { Link } from "react-router-dom";

const StartupSearch = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="search-content">
        <h1>Search</h1>
        <div className="search-form">
          <div id="fill-personal-info-form">
            <h1 style={{ marginBottom: "20px" }}>Search for an expert</h1>
            <input type="text" placeholder="Name" className="input1" />
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

            <Link to="/expert/search-result">
              <button className="btn2">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupSearch;
