"use client";
import React, { useState } from "react";
import "./All_gallery.scss";
import Image from "next/image";
import img1 from "../../../public/gokart1.jpg";
import img2 from "../../../public/mini_gp1.jpg";
import img3 from "../../../public/paintball1.jpg";
import img4 from "../../../public/quat_bike1.jpg";
import img5 from "../../../public/dune_buggy1.jpg";
import img6 from "../../../public/mini_gp1.jpg";

import Lightbox from "yet-another-react-lightbox";

import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

function page() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      image1: img1,
      title: "From Garage to Track: Go-Kart Dreams",
      description:
        "Build and race your own go-kart! A fun, hands-on project that teaches mechanics, creativity, and the thrill of speed on wheels.",
    },
    {
      image1: img2,
      title: "Mini GP: Big Thrills, Small Wheels",
      description:
        "Mini GP delivers high-speed excitement in a compact format—perfect for young racers and beginners to experience real track action and competitive fun.",
    },
    {
      image1: img3,
      title: "Paintball Arena: Battle in Color",
      description:
        "Dive into thrilling paintball battles! Strategize, dodge, and splatter your way to victory in a fast-paced, adrenaline-pumping combat experience for all ages.",
    },
    {
      image1: img4,
      title: "Quad Bike Adventures: Ride the Wild",
      description:
        "Experience off-road excitement with powerful quad bikes! Tackle rugged trails, feel the thrill, and explore nature like never before on four wheels.",
    },
    {
      image1: img5,
      title: "Dune Buggy Blast: Sand Meets Speed",
      description:
        "Strap in for a wild ride! Dune buggies deliver high-speed fun across sandy terrain—perfect for adventure lovers and off-road thrill seekers.",
    },
    {
      image1: img6,
      title: "Mini GP: Big Thrills, Small Wheels",
      description:
        "Mini GP delivers high-speed excitement in a compact format—perfect for young racers and beginners to experience real track action and competitive fun.",
    },
  ];

  const slides = data.map((item) => ({
    src: item.image1.src,
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      <div className="page-top parent">
        <h1>Gallery</h1>
      </div>
      <div className="parent gallery-page-top">
        <div className="gallery-cont container">
          {data.map((item, index) => (
            <div
              className="gallery-card bg-img-cover"
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <Image className="imagess" src={item.image1} alt="image" />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
          plugins={[Fullscreen, Video, Slideshow, Thumbnails, Zoom, Captions]}
        />
      </div>
    </>
  );
}

export default page;
