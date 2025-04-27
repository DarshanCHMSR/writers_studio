import React from "react";
import Banner from "./Banner";
import About from "./About";
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Stories from "./Stories";
import NavBar from "./NavBar";

const Home = () => {
    return (
      <>
        <NavBar />
        <Banner />
        <About />
        <Stories />
        <Services />
        <Testimonial />
        <ContactUs />
        </>
    );
  }
  export default Home;