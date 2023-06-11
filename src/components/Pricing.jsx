import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./style/Pricing.css";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="pricing">
        <div className="pricing-header" style={{ marginBottom: "50px" }}>
          <h1>Pricing & Services</h1>
        </div>
        <h1 style={{ marginBottom: "30px" }}>Offers for Company Owners</h1>
        <div className="offers">
          <div className="offer-card">
            <h2 className="offer-name">Starter Pack</h2>
            <div className="offer-card-text">
              <p>* Free accessibility to our experts database</p>
              <p>* Communication with your desired expert</p>
            </div>
            <p>
              <b>Price: </b> Free
            </p>
            <Link to="/startup/tools">
              <button className="btn2 offer-btn">Continue</button>
            </Link>
          </div>
          <div className="offer-card">
            <h2 className="offer-name">Advanced Pack</h2>
            <div className="offer-card-text">
              <p>* Accessibility to our experts database</p>
              <p>* Communication with your desired expert</p>
              <p>* Advanced company management tools</p>
            </div>
            <p>
              <b>Price: </b> 35.000DZD / Annual
            </p>
            <Link to="/startup/payment">
              <button className="btn1 offer-btn">BUY</button>
            </Link>
          </div>
          <div className="offer-card">
            <h2 className="offer-name">Premium Pack</h2>
            <div className="offer-card-text">
              <p>* Accessibility to our experts database</p>
              <p>* Communication with your desired expert</p>
              <p>* Advanced company management tools</p>
              <p>* Collaboration tools with experts</p>
            </div>
            <p>
              <b>Price: </b> 70.000DZD / Annual
            </p>
            <Link to="/startup/payment">
              <button className="btn1 offer-btn">BUY</button>
            </Link>
          </div>
        </div>

        <h1 style={{ marginBottom: "30px", marginTop: "100px" }}>
          Offers for Financial Experts
        </h1>
        <div className="offers" style={{ marginBottom: "100px" }}>
          <div className="offer-card">
            <h2 className="offer-name">Starter Pack</h2>
            <div className="offer-card-text">
              <p>* Visibility of potential new clients</p>
              <p>* communication with your clients</p>
            </div>
            <p>
              <b>Price: </b> Free
            </p>
            <Link to="/expert/tools">
              <button className="btn2 offer-btn">Continue</button>
            </Link>
          </div>
          <div className="offer-card">
            <h2 className="offer-name">Advanced Pack</h2>
            <div className="offer-card-text">
              <p>* Visibility of potential new clients</p>
              <p>* communication with your clients</p>
              <p>* Firm management tools</p>
            </div>
            <p>
              <b>Price: </b> 35.000DZD / Annual
            </p>
            <Link to="/expert/payment">
              <button className="btn1 offer-btn">BUY</button>
            </Link>
          </div>
          <div className="offer-card">
            <h2 className="offer-name">Premium Pack</h2>
            <div className="offer-card-text">
              <p>* Visibility of potential new clients</p>
              <p>* communication with your clients</p>
              <p>* Firm management tools</p>
              <p>* Accounting, financial reporting tools</p>
            </div>
            <p>
              <b>Price: </b> 70.000DZD / Annual
            </p>
            <Link to="/expert/payment">
              <button className="btn1 offer-btn">BUY</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Pricing;
