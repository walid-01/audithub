import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://yourimageshare.com/ib/SK7J1jbfut.webp"
            alt=""
            style={{ maxHeight: "50px" }}
          />
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/" className="nav-item-link black-link">
          <p className="nav-item">Home</p>
        </Link>
        <Link to="/faq" className="nav-item-link black-link">
          <p className="nav-item">FAQ</p>
        </Link>
        <Link to="/blog" className="nav-item-link black-link">
          <p className="nav-item">Blog</p>
        </Link>
        <Link to="/pricing" className="nav-item-link black-link">
          <p className="nav-item">Services</p>
        </Link>
        <Link to="/signin" className="nav-item-link black-link">
          <p className="nav-item">Sign Up / Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
