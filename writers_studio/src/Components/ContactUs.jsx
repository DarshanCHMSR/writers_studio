import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import "../css/owl.carousel.min.css";
const ContactUs = () => {
  return (
    <div>
  <div className="contact_section layout_padding">
         <div className="container">
            <h1 className="contact_text">Contact Us</h1>
         </div>
      </div>
      <div className="contact_section_2 layout_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6 padding_0">
                  <div className="mail_section">
                     <div className="email_text">
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Name" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Email" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Phone Number" name="Email"/>
                        </div>
                        <div className="form-group">
                           <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Massage"></textarea>
                        </div>
                        <div className="send_btn">
                           <div type="text" className="main_bt"><a href="#">SEND</a></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 padding_0">
                  <div className="map-responsive">
                  
                  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.771442145781!2d76.01441767490364!3d13.549607686821465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbaea4793e91c6d%3A0x1d22e2af95eb89ee!2sGovernment%20First%20Grade%20College!5e0!3m2!1sen!2sus!4v1745771098011!5m2!1sen!2sus"
  width="600"
  height="508"
  frameBorder="0"
  style={{ border: "0", width: "100%" }}
  allowFullScreen
></iframe>                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContactUs;