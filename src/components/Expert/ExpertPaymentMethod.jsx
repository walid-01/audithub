import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const ExpertPaymentMethod = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="pay-content">
          <h1
            style={{
              fontSize: "50px",
              textAlign: "center",
              marginBottom: "50px",
              marginTop: "50px",
            }}
          >
            Payment
          </h1>
          <form className="pay-form">
            <label>Card Number:</label>
            <input type="text" placeholder="1234 5678 9012 3456" />

            <label>Expiration Date:</label>
            <input type="text" placeholder="MM/YY" />

            <label>CVV:</label>
            <input type="text" placeholder="123" />

            <label>Cardholder Name:</label>
            <input type="text" placeholder="John Doe" />

            <Link to="/expert/tools">
              <button className="btn1">Submit</button>
            </Link>
          </form>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ExpertPaymentMethod;
