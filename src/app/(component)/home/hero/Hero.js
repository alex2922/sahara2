import React from "react";
import "./Hero.scss";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="hero parent">
      <div className="video-bg">
        <video src="/bg.mp4" autoPlay loop muted playsInline></video>
      </div>

      <div className="hero-container container">
        <h1 data-aos="fade-up" >
          <span>Sahara</span> Amusement
        </h1>

        <Link data-aos="fade-up" data-aos-delay="200"  className="btn" href="/contact">
          Contact Us
        </Link>
      </div>


      
    </div>
  );
};

export default Hero;
