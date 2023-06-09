import Navbar from "./Navbar";
import "./style/FAQ.css";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <div className="faq-content">
        <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>
          Frequently Asked Questions
        </h1>
        <div className="faq-questions">
          <div className="faq-question-grp">
            <h1>Question One ?</h1>
            <p className="faq-answer">Question one answer</p>
          </div>
          <div className="faq-question-grp">
            <h1>Question Two ?</h1>
            <p className="faq-answer">Question two answer</p>
          </div>
          <div className="faq-question-grp">
            <h1>Question Three ?</h1>
            <p className="faq-answer">Question three answer</p>
          </div>
          <div className="faq-question-grp">
            <h1>Question Four ?</h1>
            <p className="faq-answer">Question four answer</p>
          </div>
          <div className="faq-question-grp">
            <h1>Question Five ?</h1>
            <p className="faq-answer">Question five answer</p>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FAQ;
