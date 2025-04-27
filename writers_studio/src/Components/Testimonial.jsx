import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import images from "../images/quick-icon.png";
import "../css/owl.carousel.min.css";
const Testimonial = () => {
  return (
    <div>
        <div className="client_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="client_taital">Testimonial</h1>
                  <p className="client_text">the part where we display the user review</p>
               </div>
            </div>
         </div>
         <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="client_section_2">
                <div className="container">
                   <div className="row">
                      <div className="col-md-12">
                         <div className="testimonial_section_2">
                            <h4 className="client_name_text">User name <span className="quick_icon"><img src={images}/></span></h4>
                            <p className="customer_text">there talks </p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_section_2">
                <div className="container">
                   <div className="row">
                      <div className="col-md-12">
                         <div className="testimonial_section_2">
                            <h4 className="client_name_text">User name <span className="quick_icon"><img src={images}/></span></h4>
                            <p className="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_section_2">
                <div className="container">
                   <div className="row">
                      <div className="col-md-12">
                         <div className="testimonial_section_2">
                            <h4 className="client_name_text">Monila <span className="quick_icon"><img src={images}/></span></h4>
                            <p className="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
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