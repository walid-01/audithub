import ExpertSidebar from "./ExpertSidebar";
import "../style/Missions.css";

const ExpertMission = () => {
  return (
    <div className="content">
      <ExpertSidebar />
      <div className="mission-content">
        <h1 style={{ marginBottom: "20px" }}>Mission Details</h1>
        <div className="mission-item">
          <h1>Mission Dashboard</h1>
        </div>
        <div className="mission-item">
          <h1>Client Info</h1>
        </div>
        <div className="mission-item mission-item-container">
          <div className="mission-item2">
            <h2>Accounting</h2>
          </div>
          <div className="mission-item2">
            <h2>Audit Work</h2>
          </div>
          <div className="mission-item2">
            <h2>Financial Report</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertMission;
