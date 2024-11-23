import React from "react";
import image from "../images/heroimg1.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          My Responsibility
        </h1>
        <p>
        Dr. Mit Patel, MDS, is an experienced Prosthodontist and Implantologist dedicated to restoring smiles with precision and care. Specializing in dental implants and prosthetics, Dr. Patel provides tailored treatment solutions, ensuring comfort and quality for each patient. His expertise and compassionate approach make him a trusted choice for those seeking exceptional dental care.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
