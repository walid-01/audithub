import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <h1>AuditHub LOGO</h1>
      </div>
      <div className="nav-items">
        <Link to="/" className="nav-item-link black-link">
          <p className="nav-item">Home</p>
        </Link>
        <Link to="/" className="nav-item-link black-link">
          <p className="nav-item">FAQ</p>
        </Link>
        <Link to="/" className="nav-item-link black-link">
          <p className="nav-item">Blog</p>
        </Link>
        <Link to="/" className="nav-item-link black-link">
          <p className="nav-item">Pricing</p>
        </Link>
        <Link to="/signin" className="nav-item-link black-link">
          <p className="nav-item">Sign Up / Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
