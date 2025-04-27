import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import images from "../images/About-Banner.jpg";
import "../css/owl.carousel.min.css";
const About = () => {
  return (
    <div>
      <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital_main">
                     <div class="about_taital">About Us</div>
                     <p class="about_text">The Writer’s Studio is an all-in-one, web-based platform tailored for the unique needs of scriptwriters</p>
                     <p class="about_text">The Writer’s Studio is an all-in-one, web-based platform tailored for the unique needs of scriptwriters</p>
                     <div class="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
               <div class="col-md-6 ">
                  <div class="about_img " style={{marginTop:"100px"}}><img src={images}/></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;