import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.min.css";
const Footer = () => {
  return (
    <div>
         <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">About</h3>
                  <p className="footer_text">The Writer’s Studio is an all-in-one, web-based platform tailored for the unique needs of scriptwriters</p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Menu</h3>
                  <div className="footer_menu">
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="gallery.html">Stories</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Useful Link</h1>
                  <p className="dummy_text">Some links for reference of this project will bw given </p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Contact Us</h1>
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#">
                           <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_10">Address : Bangalore</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">Call : +91 00000 00000</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">Email : demo@gmail.com</span>
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
            <p className="copyright_text">2025 All Rights Reserved. Design by <a href="">Writers Studio</a></p>
         </div>
      </div>
     
    </div>
  );
};

export default Footer;