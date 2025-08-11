"use client";

import React, { useEffect, useState } from "react";
import MovingImagesMarquee from "./Marquee";

export default function Countdown() {
  const targetDate = new Date("2025-12-30T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full bg-gradient-to-t from-white/100 to-white/80 relative z-10 p-5 py-8 space-y-6">
      <div
        className="flex justify-center gap-6 items-center text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p className="text-xl">{timeLeft.days}</p>
          <p className="text-xs text-slate-500">Days</p>
        </div>
        <div>
          <p className="text-xl">{timeLeft.hours}</p>
          <p className="text-xs text-slate-500">Hours</p>
        </div>
        <div>
          <p className="text-xl">{timeLeft.minutes}</p>
          <p className="text-xs text-slate-500">Minutes</p>
        </div>
        <div>
          <p className="text-xl">{timeLeft.seconds}</p>
          <p className="text-xs text-slate-500">Seconds</p>
        </div>
      </div>

      <p className="text-center" data-aos="fade-up" data-aos-duration="1200">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
        tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
        sayang."
      </p>

      <MovingImagesMarquee
        images={[
          "/images/preview/1.jpg",
          "/images/preview/2.jpg",
          "/images/preview/3.jpg",
          "/images/preview/4.jpg",
        ]}
        speed={30}
      />
    </div>
  );
}
