import StartupSidebar from "./StartupSidebar";
import "../style/Project.css";

const StartupProject = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="project-content">
        <h1>Projects</h1>
        <h1>Project Name</h1>
        <div className="project-detail-items">
          <div className="project-detail-item project-detail-item-tasks">
            <h1>Tasks</h1>
          </div>
          <div className="project-detail-item project-detail-item-progress">
            <h1>Progress and Dahsboard</h1>
          </div>
          <div className="project-detail-item project-detail-item-calendar">
            <h1>Calendar</h1>
          </div>
        </div>
        <h1>Team and assigned tasks</h1>
        <div className="project-team">
          <div className="project-member">
            <h2>Member 1</h2>
            <h3>Progress 100%</h3>
            <h3>Task 1</h3>
            <h3>Task 2</h3>
            <h3>Task 3</h3>
          </div>
          <div className="project-member">
            <h2>Member 2</h2>
            <h3>Progress 50%</h3>
            <h3>Task 1</h3>
            <h3>Task 2</h3>
            <h3>Task 3</h3>
          </div>
          <div className="project-member">
            <h2>Member 3</h2>
            <h3>Progress 25%</h3>
            <h3>Task 1</h3>
            <h3>Task 2</h3>
            <h3>Task 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupProject;
