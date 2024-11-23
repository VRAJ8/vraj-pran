import React from "react";
import image from "../images/aboutimg1.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Welcome to Orion Dental Clinic’s online booking system! We’re dedicated to making dental care accessible and convenient, offering easy appointment scheduling for all our services—from routine cleanings to specialized treatments. With a focus on quality care and patient comfort, Orion Dental Clinic is here to help you achieve a healthy, confident smile. Book your appointment today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
