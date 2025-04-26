import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import images from "../images/quick-icon.png";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.min.css";
const Testimonial = () => {
  return (
    <div>
        <div class="client_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="client_taital">Testimonial</h1>
                  <p class="client_text">the part where we display the user review</p>
               </div>
            </div>
         </div>
         <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="client_section_2">
                <div class="container">
                   <div class="row">
                      <div class="col-md-12">
                         <div class="testimonial_section_2">
                            <h4 class="client_name_text">User name <span class="quick_icon"><img src={images}/></span></h4>
                            <p class="customer_text">there talks </p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="client_section_2">
                <div class="container">
                   <div class="row">
                      <div class="col-md-12">
                         <div class="testimonial_section_2">
                            <h4 class="client_name_text">User name <span class="quick_icon"><img src={images}/></span></h4>
                            <p class="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="client_section_2">
                <div class="container">
                   <div class="row">
                      <div class="col-md-12">
                         <div class="testimonial_section_2">
                            <h4 class="client_name_text">Monila <span class="quick_icon"><img src={images}/></span></h4>
                            <p class="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
         </div>

       
    </div>
  );
};

export default Testimonial;