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
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/Signup";
import ForgotPassword from "./Components/auth/Forgotpassword";
import Home from "./Components/Home";
import Creator from "./Components/Creator";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PublicStories from "./Components/PublicStories";
import EditStory from "./Components/EditStory";

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
        <Route path="/n" element={<Homes />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/publicstories" element={<PublicStories />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/editstory/:id" element={<Creator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;