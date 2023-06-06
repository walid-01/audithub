import React from "react";
import "./style/Welcome.css";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Welcome = () => {
  return (
    <div id="welcome">
      <Navbar />
      <div className="welcome-content">
        <div className="welcome-intro">
          <h1 className="title">AuditHub</h1>
          <h2 className="subtitle">Presentation of the platform</h2>
        </div>
        <div className="welcome-about">
          <h1>About Us</h1>
          <div className="about-content">
            <div className="about-card">
              <div className="about-card-text">
                <h3>Presentation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, esse itaque minima reprehenderit labore soluta
                  provident mollitia maxime blanditiis quas voluptatibus
                  perferendis animi temporibus iure eaque dicta aliquam. Magni
                  nobis voluptatem hic alias doloremque, consectetur corrupti
                  aliquid quia, esse dolores dolorum non fugit? Culpa saepe
                  cumque repellat, earum illum aut?
                </p>
              </div>
              <img
                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                alt=""
              />
            </div>
            <div className="about-card">
              <img
                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                alt=""
              />
              <div className="about-card-text">
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis impedit facilis adipisci corrupti perspiciatis quo
                  quaerat, in nulla deleniti vero? Labore velit itaque nam
                  cumque sequi a quibusdam blanditiis laboriosam saepe? Enim
                  inventore error magni.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-text">
                <h3>Services</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                  aliquid possimus ipsam vero nisi quaerat similique neque hic
                  quam, et porro veritatis corrupti minus maiores, sit
                  perspiciatis id, provident voluptas ratione praesentium. Cum
                  velit dolorum aut voluptates iusto, ipsum beatae?
                </p>
              </div>
              <img
                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                alt=""
              />
            </div>
            <div className="about-card">
              <img
                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                alt=""
              />
              <div className="about-card-text">
                <h3>Our Team</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iure, unde non consequuntur maxime delectus tenetur veritatis
                  accusantium soluta aspernatur nihil mollitia suscipit quia nam
                  hic laudantium eius illo, eveniet minus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p>Copyright © 2023 AuditHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
