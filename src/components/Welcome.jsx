import React from "react";
import "./style/Welcome.css";
import Navbar from "./Navbar";

const Welcome = () => {
  return (
    <div id="welcome">
      <Navbar />
      <div className="welcome-content">
        <div className="welcome-intro">
          <img src="https://yourimageshare.com/ib/ZBJKrSkIo5.webp" alt="" />
          <div className="intro-text">
            <h1 className="title">AuditHub</h1>
            <h2 className="subtitle">Empowering Success through Expertise</h2>
          </div>
        </div>
        <div className="welcome-about">
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              marginBottom: "50px",
            }}
          >
            About Us
          </h1>
          <div className="about-content">
            <div className="about-card">
              <div className="about-card-text">
                <h3>Presentation of the company</h3>
                <p>&quot;Unlock the Power of seamless collaboration&quot;.</p>
                <p>
                  With our platform, professionals can effortlessly collaborate,
                  communicate, and share information with their clients, team
                  members, and partners. We provide a seamless and intuitive
                  interface that facilitates real-time collaboration, allowing
                  for efficient workflow management, document sharing, task
                  assignment, and more. By unlocking the power of seamless
                  collaboration, AuditHub empowers accounting professionals to
                  work together effectively, streamline processes, and achieve
                  exceptional results.
                </p>
              </div>
              <img src="https://yourimageshare.com/ib/dRtUZbop7C.webp" alt="" />
            </div>
            <div className="about-card">
              <img src="https://yourimageshare.com/ib/26NvMJBGc2.webp" alt="" />
              <div className="about-card-text">
                <h3>Our Mission</h3>
                <p>
                  &quot;Building Bridges for collaboration and innovation&quot;.
                </p>
                <p>
                  Our platform serves as a bridge that connects accounting
                  professionals, startups, and small companies, enabling them to
                  collaborate, exchange ideas, and drive innovation together.
                </p>
                <p>
                  By building bridges for collaboration, AuditHub encourages the
                  exchange of expertise, promotes a culture of innovation, and
                  empowers accounting professionals and businesses to achieve
                  their full potential. Together, we can create a future of
                  collaborative growth and transformative innovation in the
                  world of accounting.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-text">
                <h3>Our services</h3>
                <p>
                  At AuditHub, we are dedicated to providing a comprehensive
                  platform that caters to the needs of both auditors, accounting
                  experts, advisors, and startups, small, and new businesses.
                  Our service offers a seamless and efficient solution that
                  enables auditors and accounting experts to streamline their
                  processes, access powerful tools for auditing, accounting, and
                  financial analysis, and collaborate seamlessly with their
                  clients. For startups, small, and new businesses, we offer a
                  range of services that help them effectively manage their
                  financial operations, gain valuable insights, and make
                  informed decisions to drive growth and success. With AuditHub,
                  professionals and businesses alike can leverage our expertise
                  and cutting-edge technology to optimize their financial
                  management and unlock their full potential.
                </p>
              </div>
              <img src="https://yourimageshare.com/ib/ZXeL6l88JI.webp" alt="" />
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
