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
            <div className="">
               <div className="col-md-6-ml-3 padding_0">
                  <div className="mail_section">
                     <div className="email_text">
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Name" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Email" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email"/>
                        </div>
                        <div className="form-group">
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        </div>
                        <div className="send_btn">
                           <div type="text" className="main_bt"><a href="#">SEND</a></div>
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

export default ContactUs;