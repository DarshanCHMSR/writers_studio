import images from "../images/logo.webp";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Track the current location
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    window.location = "/login";
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={images} alt="Logo" style={{ height: "40px" }} />
          </Link>
          <button
            className="navbar-toggler btn btn-dark" // Ensures the button is always dark
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#343a40", borderColor: "#343a40" }} // Explicitly set dark background and border
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
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
              <li className={`nav-item ${location.pathname === "/creator" ? "active" : ""}`}>
                <Link className="nav-link" to="/creator">
                  Create Your Story
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === "/testimonials" ? "active" : ""}`}>
                <Link className="nav-link" to="/testimonials">
                  Testimonials
                </Link>
              </li>

              
              {localStorage.getItem('auth-token') ? ( location.pathname === "/creator" || "/stories"? (
                                     <button className="btn btn-primary mx-3" onClick={handleLogout} >Logout</button>
              ) : (
                <li >
                  
                </li>
              )):(location.pathname === "/login" ? (
                <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              ) : (
                <li className={`nav-item ${location.pathname === "/signup" ? "active" : ""}`}>
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              ))}
              {}
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;