import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Testimonial from "./Components/Testimonial";
import Services from "./Components/Services";
import Stories from "./Components/Stories";

function Homes() {
  return (
    <>
      <Banner />
      <About />
      <Stories />
      <Services />
      <Testimonial />
      <ContactUs />
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;