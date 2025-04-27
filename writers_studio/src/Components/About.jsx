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
                     <p className="about_text">The Writer’s Studio is an all-in-one, web-based platform tailored for the unique needs of scriptwriters</p>
                     <p className="about_text">The Writer’s Studio is an all-in-one, web-based platform tailored for the unique needs of scriptwriters</p>
                     <div className="read_bt"><a href="#">Read More</a></div>
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