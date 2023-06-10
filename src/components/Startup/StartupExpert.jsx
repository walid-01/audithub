import React from "react";
import StartupSidebar from "./StartupSidebar";
import { Link } from "react-router-dom";

const StartupExpert = () => {
  return (
    <div className="content">
      <StartupSidebar />
      <div className="profile-content">
        <div className="profile-part1">
          <div className="profile-img-container">
            <img
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt=""
              id="profile-img"
            />
            <button className="btn2">Change image</button>
          </div>
          <div className="profile-info">
            <div className="info-tuple">
              <h4>Full Name: </h4>
              <p>John Doe</p>
            </div>
            <div className="info-tuple">
              <h4>Prosfession: </h4>
              <p>Prosfession</p>
            </div>
            <div className="info-tuple">
              <h4>Phone Number: </h4>
              <p>0123456789</p>
            </div>
            <div className="info-tuple">
              <h4>Email: </h4>
              <p>johndoe@mail.com</p>
            </div>
            <div className="info-tuple">
              <h4>Address: </h4>
              <p>Address</p>
            </div>
            <div className="info-tuple">
              <h4>Areas of expertise: </h4>
              <ul style={{ listStyle: "none" }}>
                <li>- Area 1</li>
                <li>- Area 2</li>
                <li>- Area 3</li>
              </ul>
            </div>
            <div className="info-tuple">
              <h4>Provided Services: </h4>
              <ul style={{ listStyle: "none" }}>
                <li>- Service 1</li>
                <li>- Service 2</li>
              </ul>
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
          <Link to="/startup/chat/chat-1">
            <button className="btn1" style={{ fontSize: "16px" }}>
              Chat with expert
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupExpert;
