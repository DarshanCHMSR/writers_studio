import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h3 className="useful_text">About</h3>
              <p className="footer_text">
                The Writer’s Studio is an all-in-one, web-based platform tailored for the unique needs of scriptwriters
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h3 className="useful_text">Menu</h3>
              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/stories">Stories</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="useful_text">Useful Link</h1>
             
                <a href="https://www.celtx.com" style={{color:"white"}} >Celtx</a>
                <br></br>
                <a href="Node.js" style={{color:"white"}} >Node js </a>
                <br></br>
                <a href="https://reactjs.org" style={{color:"white"}} >React js</a>
                <br></br>
                <a href="https://www.mongodb.com" style={{color:"white"}} >MongoDB</a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="useful_text">Contact Us</h1>
              <div className="location_text">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span className="padding_left_10">Address : Kadur</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span className="padding_left_10">Call : +91 73383 16893</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span className="padding_left_10">Email : guru@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2025 All Rights Reserved. Design by <a href="#">Writers Studio</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;