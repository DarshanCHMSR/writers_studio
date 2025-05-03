// filepath: c:\Users\Darsh\OneDrive\Desktop\full stack\writers_studio\writers_studio\src\Components\Banner.jsx
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS (includes Popper.js)

const Banner = () => {
  return (
    <div>
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Dream Ink</h1>
                      <h1 className="coffee_text">Writers Studio</h1>
                      <p className="there_text">
                        <strong>Craft Your Perfect Script with StoryForge – Where Creativity Meets Structure.</strong> 
                        Where Creativity Meets Structure. Unleash your imagination with a platform designed specifically for screenwriters, offering intuitive tools for writing, formatting, and organizing your scripts effortlessly.                      </p>
                      <div className="learnmore_bt">
                        <a href="/creator">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Dream Ink</h1>
                      <h1 className="coffee_text">Writers Studio</h1>
                      <p className="there_text">
                        <strong>Real-time Collaboration | Auto-save & Version History | Professional Script Formatting"</strong>
                        Write, edit, and collaborate seamlessly with others. Enjoy a user-friendly script editor that ensures your work is always perfectly formatted.</p>
                      <div className="learnmore_bt">
                        <a href="/creator">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Dream Ink</h1>
                      <h1 className="coffee_text">Writers Studio</h1>
                      <p className="there_text">
                        <strong>"Start Writing Today – Join for Free!"</strong>
                        Whether you're a budding screenwriter or an experienced storyteller, StoryForge is here to help you bring your ideas to life. Sign up now and get started on your first script with all the tools you need at your fingertips
                      </p>
                      <div className="learnmore_bt">
                        <a href="/creator">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-bs-slide="prev"
            >
              <i class="fa fa-angle-left"></i>

            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-bs-slide="next"
            >
                             <i class="fa fa-angle-right"></i>

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;