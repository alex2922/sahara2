"use client";

import React from "react";
import "./contact.scss";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="contact1 parent">
        <div className="contact-container1 container">
          <h1>
            Let’s <span>Get in Touch!</span>
          </h1>

          <p>
            Have questions or ready to book your adventure? Reach out to us! Our
            team is here to help you plan the ultimate experience with Sahara
            Amusement.
          </p>
        </div>
      </div>

      <BlackBorder flip={true} margin={"-96px"} />

      <div className="contact2 parent">
        <div className="contact-container2 container">
          <div className="left">
            <h2>We’re Here to Help!</h2>

            <p className="para">
            Whether you need details about our activities, want to book a session, or just have a question, we’re just a message away.
            </p>
            <div className="contact-details">
              <div className="icons-box">
                <div className="icon">
                  <FaLocationDot />
                </div>
                <div className="text">
                  <p>
                    
                    <span>Address</span>
                  </p>
                  <p>123 Main Street, City, Country</p>
                </div>
              </div>
              <div className="icons-box">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <p>
                    
                    <span>Email</span>
                  </p>
                  <p>example@gmail.com</p>
                </div>
              </div>
              <div className="icons-box">
                <div className="icon">
                  <IoMail />
                </div>
                <div className="text">
                  <p>
                    
                    <span>Phone</span>
                  </p>
                  <p>+971 1232143342</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
           
            <div className="social">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
              <AiFillInstagram />
              </div>
              <div className="icon">
              <FaXTwitter />
              </div>
              <div className="icon">
              <IoLogoYoutube />
              </div>
              <div className="icon">
              <FaTiktok />
              </div>
            </div>
          </div>
          <div className="right">
            <form>
              <label>
                <p>Your Name*</p>
                <input  type="text" required />
                <p className="error">
                  name can`t be empty or more than 50 char
                </p>
              </label>
             <div className="row">
             <label>
                <p>Your Phone*</p>
                <input  type="number" required />
                <p className="error">
                  name can`t be empty or more than 50 char
                </p>
              </label>
              <label>
                <p>Activity*</p>
                <input  type="text" required />
                <p className="error">
                  name can`t be empty or more than 50 char
                </p>
              </label>
             </div>
              <label>
                <p>Your Email*</p>
                <input  type="email" required />
                <p className="error">
                  name can`t be empty or more than 50 char
                </p>
              </label>
              <label>
                <p>Your Message</p>
                <textarea  type="text"  />
                <p className="error">
                  name can`t be empty or more than 50 char
                </p>
              </label>
             

              <button className="btn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <GreyBorder margin={"-96px"} />

      <div className="parent map">
        <div className="container map-container">

        <div className="mapbox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4450.647000446021!2d55.69807107604907!3d24.964966241066566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef577c60bfa0881%3A0xe2c5cf58379725a8!2zU2FoYXJhIEFtdXNlbWVudCDYtdit2KfYsdmJINmE2YTYqtix2YHZitmH!5e1!3m2!1sen!2sin!4v1741334602465!5m2!1sen!2sin"
          style={{ border: 0 }}
          height="100%"
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        </div>

        </div>
      </div>

      <BlackBorder flip={true} margin={"-96px"} />


    </>
  );
};

export default page;
