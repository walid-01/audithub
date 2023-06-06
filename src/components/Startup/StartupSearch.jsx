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
            <input type="text" placeholder="Profession" className="input1" />

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
