import React from "react";
import StartupSidebar from "./StartupSidebar";
import "../style/Payment.css";

const StartupPay = () => {
  return (
    <div className="content">
      <StartupSidebar />
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

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default StartupPay;
