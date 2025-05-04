import imag1 from "../images/imag1.png";
import imag2 from "../images/imag2.png";
import imag3 from "../images/imag3.png";
import { Link } from "react-router-dom";

const Services = () => {
    return (
     <div>
    <div className="services_section layout_padding">
         <div className="container" style={{display:"block"}}>
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="services_taital">Services</h1>
                  <p className="services_text">Writers Studio offers a professional, distraction-free writing environment tailored for screenwriters, YouTube creators, and storytellers. The built-in formatting tools help users structure scenes, dialogues, and transitions according to screenwriting conventions, eliminating the need for complex third-party tools. </p>
               </div>
            </div>
            <div className="services_section_2">
               <div className="row">
                  <div className="col-lg-4 col-sm-12 col-md-4">
                     <div className="box_main active">
                        <div className="house_icon">
                           <img src={imag1} className="image_1"/>
                           <img src={imag1} className="image_2"/>
                        </div>
                        <h3 className="decorate_text">StoryForge</h3>
                        <p className="tation_text">StoryForge--Create Your Own Story provides a user-friendly platform designed specifically for scriptwriters, content creators, and storytellers. Our editor supports professional editing and transitions making it easier to write stories or stage plays in industry-standard format without complex setup.</p>
                        <div className="readmore_bt"><Link to="/creator">
                  Explore 
                </Link></div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-4">
                     <div className="box_main">
                        <div className="house_icon">
                        <img src={imag3} className="image_1"/>
                        <img src={imag3} className="image_2"/>
                        </div>
                        <h3 className="decorate_text">StoryHub</h3>
                        <p className="tation_text">Users can explore a curated collection of publicly shared scripts across genres—drama, comedy, thriller, sci-fi, and more. Each story includes a synopsis, author name, and tags for easy browsing.</p>
                        <div className="readmore_bt"><Link to="/publicstories">
                  Explore 
                </Link></div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-4">
                     <div className="box_main">
                        <div className="house_icon">
                        <img src={imag2} className="image_1"/>
                        <img src={imag2} className="image_2"/>
                        </div>
                        <h3 className="decorate_text">MyScriptVault</h3>
                        <p className="tation_text">Every registered user has access to their own digital vault, where all created scripts are stored securely. Writers can manage multiple projects simultaneously, with options to rename, categorize, or archive their stories.</p>
                        <div className="readmore_bt"><Link to="/stories">
                  Explore 
                </Link></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
    );
  };
  
  export default Services;
