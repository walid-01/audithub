import StartupSidebar from "./StartupSidebar";

const StartupChat = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="notification-content">
        <h1>Chat</h1>
        <div className="notification-container">
          <div className="notification cursor-pointer">
            <p className="notif-text">Expert 1</p>
          </div>
          <div className="notification cursor-pointer">
            <p className="notif-text">Expert 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupChat;
