"use client";

import Header from "./(component)/header/Header";
import ThemeStore from "./(component)/store/Theme";
import "./globals.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./(component)/footer/Footer";
import { Montserrat } from "next/font/google";
import { IoLogoWhatsapp } from "react-icons/io";

const montserrat = Montserrat({
  subsets: ["latin"], // Optimize for specific characters
  weight: ["400", "700"], // Specify weights (400 = normal, 700 = bold)
  display: "swap", // Improves performance
});

export default function RootLayout({ children }) {
  const { isDarkMode } = ThemeStore();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${isDarkMode ? "dark" : "light"}`}
        data-lenis
      >
        <Header />
        {children}
        <Footer />
      </body>

      <a
        href="https://wa.me/971565776001"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <span>
          <IoLogoWhatsapp />
        </span>
      </a>
    </html>
  );
}
