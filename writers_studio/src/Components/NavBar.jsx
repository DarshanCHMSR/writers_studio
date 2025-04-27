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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={images} alt="Logo" style={{ height: "40px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/stories" ? "active" : ""}`}>
              <Link className="nav-link" to="/stories">
                Stories
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/testimonials" ? "active" : ""}`}>
              <Link className="nav-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            {
              location.pathname === "/login" ? <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li> : (
                <li className={`nav-item ${location.pathname === "/signup" ? "active" : ""}`}>
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              )
            }
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;