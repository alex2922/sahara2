import React from "react";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer parent">
        <div className="footer-container container">
          <div className="col">
            <h3>Quick Links</h3>

            <div className="links">
              <Link href="/">Home</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Activities</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">FAQs</Link>
            </div>
          </div>

          <div className="col">
            <h3>Social Media Links</h3>

            <div className="links">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
              <Link href="/">YouTube</Link>
              <Link href="/">TikTok</Link>
            </div>
          </div>

          <div className="col">
            <h3>Legal</h3>

            <div className="links">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms & Conditions</Link>
            </div>
          </div>

          <div className="col">
            <h3>Contacts</h3>

            <div className="links">
              <Link href="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                earum.
              </Link>
              <Link href="/">test@gmail.com</Link>
              <Link href="/">2834908230948</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright parent">
        <div className="copyright-container container">
          <p>© 2025 Sahara Amusement. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
