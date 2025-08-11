import { Dynalight } from "next/font/google";
import React from "react";

const dynalight = Dynalight({
  weight: "400", // Dynalight cuma punya 1 weight
  subsets: ["latin"],
});

export default function Main() {
  return (
    <div className="h-screen w-full relative z-10">
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/80 to-white/0 h-[80vh] pb-30 flex items-end justify-center">
        <div className="text-center ">
          <p data-aos="fade-in" data-aos-duration="1000">
            THE WEDDING OF
          </p>
          <div className={`${dynalight.className}`}>
            <p
              className="text-6xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Vira &
            </p>
            <p
              className="text-6xl"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Edo
            </p>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000">
            SELASA, 30 DESEMBER 2026
          </p>
        </div>
      </div>
    </div>
  );
}
