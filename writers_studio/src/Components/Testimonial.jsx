import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS (includes Popper.js)
import "../css/style.css";
import "../css/responsive.css";
import "../css/jquery.mCustomScrollbar.min.css";
import "../css/owl.carousel.min.css";
import images from "../images/quick-icon.png";

const Testimonial = () => {
  return (
    <div>
      <div className="client_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="client_taital">Testimonial</h1>
              <p className="client_text">
              Testimonials offer authentic feedback from users who have experienced the tools firsthand. They reflect how Writers Studio—through its integrated tools like StoryForge, StoryHub, and MyScriptVault—has impacted aspiring screenwriters, students, content creators, and freelancers in meaningful ways.
              </p>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel" // Updated for Bootstrap 5
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_section_2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="testimonial_section_2">
                        <h4 className="client_name_text">
                        Ravi D., Student Filmmaker & Editor{" "}
                          <span className="quick_icon">
                            <img src={images} alt="Quick Icon" />
                          </span>
                        </h4>
                        <p className="customer_text">
                        "I never thought a script-reading tool could be this engaging. StoryHub not only let me explore real scripts written by other creators, but its clean reading interface actually helped me learn how a proper screenplay flows. It's like a creative library where every story sparks new ideas. For someone who learns by reading others' work, this tool is a goldmine."
                        </p>
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
                        <h4 className="client_name_text">
                        Sneha K., Short Film Creator & Writer{" "}
                          <span className="quick_icon">
                            <img src={images} alt="Quick Icon" />
                          </span>
                        </h4>
                        <p className="customer_text">
                        "Before MyScriptVault, I used to manage my scripts across different folders, emails, and even WhatsApp notes! Now, everything is organized and easily accessible in one secure space. The auto-save and version history features have been a lifesaver during hectic deadlines. Plus, getting my script automatically emailed as a PDF is such a smart touch. It feels like my creative space finally has a home."
                        </p>
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
                        <h4 className="client_name_text">
                        Aarav R., Aspiring Screenwriter{" "}
                          <span className="quick_icon">
                            <img src={images} alt="Quick Icon" />
                          </span>
                        </h4>
                        <p className="customer_text">
                        As someone just stepping into the world of screenwriting, I always found formatting to be frustrating—until I discovered Create Your Own Story. It’s incredibly intuitive, with all the formatting tools I need built in. I can focus purely on writing instead of worrying about margins and character blocks. It actually feels like I'm using a professional-grade tool, but it's simple enough even for beginners like me.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;