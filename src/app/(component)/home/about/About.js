import React from "react";
import "./About.scss";
import Link from "next/link";

const About = () => {
  return (
    <div className="about parent">
      <div className="about-container container">
        <div className="left imghover">
          <div
            className="imgbox "
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="right">
          <h2 data-aos="fade-up" id="aboutHeading">
            Lorem ipsum dolor sit, amet
            <span> adipisicing elit. Illo, qui.</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="150">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            illo sed. Sit sapiente repellendus fugiat quas corrupti magnam quam
            doloremque possimus voluptates eos error facere aliquid dignissimos,
            nihil cupiditate, iste nam dolores incidunt aut minus. Laborum qui
            sit quisquam ipsam natus accusamus odit magni! Impedit modi veniam
            porro, non autem possimus nulla velit optio nesciunt, facilis quod
            nostrum saepe deserunt.
          </p>

          <Link
            href="/contact"
            className="btn"
            data-aos="fade-up"
            data-aos-anchor="#aboutHeading"
            data-aos-delay="200"
          >
            Reach out to us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
