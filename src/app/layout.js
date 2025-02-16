"use client";

import Header from "./(component)/header/Header";
import ThemeStore from "./(component)/store/Theme";
import "./globals.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./(component)/footer/Footer";

export default function RootLayout({ children }) {
  const { isDarkMode } = ThemeStore();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

 

  return (
    <html lang="en">
      <body className={isDarkMode ? "" : "light"} data-lenis>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
