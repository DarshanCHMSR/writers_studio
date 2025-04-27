import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import "../css/owl.carousel.min.css";
import images from "../images/logo.webp";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Track the current location

  return (
    <div>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <Link to="/">
                <img src={images} alt="Logo" style={{ height: "60px" }} />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/stories" ? "active" : ""}`}>
                  <Link className="nav-link" to="/stories">
                    Stories
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;