import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import images from "../images/About-Banner.jpg";
import "../css/owl.carousel.min.css";
const About = () => {
  return (
    <div>
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_taital_main">
                     <div className="about_taital">About Us</div>
                     <p className="about_text">Writers Studio is a free, user-friendly web platform for scriptwriting, designed for both beginners and professionals. It offers essential tools for writing, editing, and managing scripts with industry-standard formatting. Built with modern technologies, it features secure user profiles, real-time collaboration, and accessibility across devices, aiming to inspire creativity and streamline the scriptwriting process.</p>
                     <div className="read_bt"><a href="/creator">Let's explore</a></div>
                  </div>
               </div>
               <div className="col-md-6 ">
                  <div className="about_img " style={{marginTop:"100px"}}><img src={images}/></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;