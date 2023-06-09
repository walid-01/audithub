import React from "react";
import Navbar from "./Navbar";
import "./style/Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment">
      <Navbar />
      <div className="payment-content">
        <h1 style={{ fontSize: "60px", marginBottom: "30px" }}>Payment</h1>
        <div className="payment-card">
          <h1>Payment details:</h1>
          <div className="payment-card-row">
            <p>Subscription start date</p>
            <p>01/01/2023</p>
          </div>
          <div className="payment-card-row">
            <p>Subscription end date</p>
            <p>01/01/2024</p>
          </div>
          <div className="payment-card-row">
            <p>Price (HT)</p>
            <p>Price</p>
          </div>
          <div className="payment-card-row">
            <p>Taxes</p>
            <p>Price</p>
          </div>
          <div className="payment-card-row">
            <p>Price (TTC)</p>
            <p>Price</p>
          </div>
          <div className="payment-card-row" style={{ fontWeight: "bold" }}>
            <p>Total</p>
            <p>Price</p>
          </div>
          <Link to="/payment-method">
            <button
              className="btn1"
              style={{ width: "100%", marginTop: "20px" }}
            >
              CONTINUE
            </button>
          </Link>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Payment;
