import { Dynalight } from "next/font/google";
import React from "react";
import Brand from "./Brand";

const dynalight = Dynalight({ weight: "400", subsets: ["latin"] });

export default function Ending() {
  return (
    <div className="w-full h-screen relative z-10 bg-gradient-to-b from-white/0 to-white/100 flex items-end p-5 text-center pb-12">
      <div className="space-y-3 w-full">
        <p data-aos="fade-up" data-aos-delay="100">
          Merupakan suaru kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do&apos;a restu
          kepada kedua mempelai
        </p>

        <p className="font-bold" data-aos="zoom-in" data-aos-delay="200">
          The Wedding of
        </p>

        <p
          className={`text-6xl font-bold ${dynalight.className}`}
          data-aos="zoom-in"
          data-aos-delay="280"
        >
          Vira & Edo
        </p>

        <div data-aos="fade-up" data-aos-delay="360">
          <Brand />
        </div>
      </div>
    </div>
  );
}
