import StartupSidebar from "./StartupSidebar";
import "../style/Profile.css";

const StartupProfile = () => {
  return (
    <div className="profile">
      <StartupSidebar />
      <div className="profile-content">
        <div className="profile-part1">
          <div className="profile-img-container">
            <img
              src="https://socialimpact.com/wp-content/uploads/2021/03/logo-placeholder.jpg"
              alt=""
            />
            <button className="btn2">Change image</button>
          </div>
          <div className="profile-info">
            <div className="info-tuple">
              <h4>Name: </h4>
              <p>Company name</p>
            </div>
            <div className="info-tuple">
              <h4>Info: </h4>
              <p>Information</p>
            </div>
            <div className="info-tuple">
              <h4>Info: </h4>
              <p>Information</p>
            </div>
            <div className="info-tuple">
              <h4>Info: </h4>
              <p>Information</p>
            </div>
            <div className="info-tuple">
              <h4>Info: </h4>
              <p>Information</p>
            </div>
            <div className="info-tuple">
              <h4>Info: </h4>
              <p>Information</p>
            </div>
          </div>
        </div>
        <div className="profile-part2">
          <div className="info-tuple2">
            <h4>More Information: </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              eligendi veniam aperiam, voluptates laborum possimus!
            </p>
          </div>
          <div className="info-tuple2">
            <h4>More Information: </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              eligendi veniam aperiam, voluptates laborum possimus!
            </p>
          </div>
          <div className="info-tuple2">
            <h4>More Information: </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              eligendi veniam aperiam, voluptates laborum possimus!
            </p>
          </div>
          <button className="btn2 long-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;
