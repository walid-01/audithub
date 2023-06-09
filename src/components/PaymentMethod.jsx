import React from "react";
import Navbar from "./Navbar";

const PaymentMethod = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "350px auto", textAlign: "center" }}>
        <h1>Payment Methods</h1>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
