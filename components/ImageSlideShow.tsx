"use client";

import Image from "next/image";
import React from "react";

import { Fade } from "react-slideshow-image";

const images = [
  "/images/preview/1.jpg",
  "/images/preview/2.jpg",
  "/images/preview/3.jpg",
  "/images/preview/4.jpg",
  "/images/preview/5.jpg",
];

export default function ImageSlideShow() {
  return (
    <div className="w-full h-screen fixed inset-0 z-0 overflow-hidden">
      <Fade
        duration={2000} // Durasi tiap slide (ms)
        transitionDuration={1000} // Durasi transisi antar slide
        infinite
        arrows={false}
        indicators={false}
        pauseOnHover={false}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-screen relative">
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
}
