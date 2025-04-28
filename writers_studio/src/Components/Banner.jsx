
const Banner = () => {
  return ( 
   <div>
   <div className="banner_section layout_padding">
       <div className="container">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
                <div className="carousel-item active">
                   <div className="row">
                      <div className="col-sm-12">
                         <div className="banner_taital">
                            <h1 className="outstanding_text">Dream Ink</h1>
                            <h1 className="coffee_text">Writers Studio</h1>
                            <p className="there_text"><strong>The Writer’s Studio is an all-in-one,</strong> web-based platform tailored for the unique needs of scriptwriters. Whether you're crafting a screenplay for a movie, scripting a stage play, building dialogue for a video game, or developing episodic content for web series and television—this tool is designed to be your creative companion. </p>
                            <div className="learnmore_bt"><a href="#">Get Started</a></div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-sm-12">
                         <div className="banner_taital">
                            <h1 className="outstanding_text">Outstanding </h1>
                            <h1 className="coffee_text">Coffee Shop</h1>
                            <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                            <div className="learnmore_bt"><a href="#">Learn More</a></div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-sm-12">
                         <div className="banner_taital">
                            <h1 className="outstanding_text">Outstanding </h1>
                            <h1 className="coffee_text">Coffee Shop</h1>
                            <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                            <div className="learnmore_bt"><a href="#">Learn More</a></div>
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

export default Banner;