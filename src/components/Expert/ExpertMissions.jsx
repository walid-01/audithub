import ExpertSidebar from "./ExpertSidebar";
import "../style/Missions.css";
import { Link } from "react-router-dom";

const ExpertMissions = () => {
  return (
    <div className="content">
      <ExpertSidebar />
      <div className="mission-content">
        <h1>Missions</h1>
        <div className="missions">
          <Link to="/expert/missions/mission-1" className="black-link">
            <div className="missions-item">
              <h2>Client 1</h2>
              <h3>name</h3>
              <h3>mission type</h3>
              <h3>mission start date</h3>
              <h3>mission deadline</h3>
              <h3>progress --%</h3>
            </div>
          </Link>
          <Link to="/expert/missions/mission-1" className="black-link">
            <div className="missions-item">
              <h2>Client 2</h2>
              <h3>name</h3>
              <h3>mission type</h3>
              <h3>mission start date</h3>
              <h3>mission deadline</h3>
              <h3>progress --%</h3>
            </div>
          </Link>
          <Link to="/expert/missions/mission-1" className="black-link">
            <div className="missions-item">
              <h2>Client 3</h2>
              <h3>name</h3>
              <h3>mission type</h3>
              <h3>mission start date</h3>
              <h3>mission deadline</h3>
              <h3>progress --%</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertMissions;
