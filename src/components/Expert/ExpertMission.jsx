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
        <div className="mission-item">
          <h1>Tools Used</h1>
        </div>
      </div>
    </div>
  );
};

export default ExpertMission;
