"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageSlideShow from "@/components/ImageSlideShow";
import Gallery from "@/components/Gallery";
import Atending from "@/components/Atending";
import Gift from "@/components/Gift";
import Cover from "@/components/Cover";
import Main from "@/components/Main";
import Countdown from "@/components/Countdown";
import BrideGroom from "@/components/BrideGroom";
import Event from "@/components/Event";
import Streaming from "@/components/Streaming";
import Story from "@/components/Story";
import Ending from "@/components/Ending";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";

const images = [
  { src: "/images/preview/1.jpg", alt: "A" },
  { src: "/images/preview/6.jpg", alt: "B" },
  { src: "/images/preview/3.jpg", alt: "C" },
  { src: "/images/preview/4.jpg", alt: "D" },
  { src: "/images/preview/5.jpg", alt: "E" },
  { src: "/images/preview/7.jpg", alt: "E" },
];

const music = "/music.mp3";

export default function UndanganPage() {
  const [cover, setCover] = useState(true);
  const [isPlay, setIsPlay] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCoverClose = () => {
    setCover(false);
    setIsPlay(true);
  };

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlay) {
      audioRef.current.play().catch((err) => {
        console.error("Gagal memutar musik:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlay]);

  return (
    <div className="relative z-10">
      <audio ref={audioRef} src={music} loop preload="auto" />
      {cover ? (
        <Cover onClose={handleCoverClose} />
      ) : (
        <>
          <ImageSlideShow />
          <Main />
          <Countdown />
          <BrideGroom />
          <Event />
          <Streaming />
          <Gallery images={images} />
          <Story />
          <Gift />
          <Atending />
          <Ending />
        </>
      )}
      {!cover && (
        <div className="fixed bottom-5 right-8 z-20 text-slate-500 p-1 rounded-full bg-white">
          {isPlay ? (
            <FiPauseCircle size={30} onClick={handlePlay} />
          ) : (
            <FiPlayCircle size={30} onClick={handlePlay} />
          )}
        </div>
      )}
    </div>
  );
}
