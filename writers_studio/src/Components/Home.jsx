import React from "react";
import Banner from "./Banner";
import About from "./About";
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import Services from "./Services";

const Home = () => {
    return (
      <>
        <Banner />
        <About />
        <Services />
        <Testimonial />
        <ContactUs />
        </>
    );
  }
  export default Home;