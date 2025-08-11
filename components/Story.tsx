import { Dynalight } from "next/font/google";
import Image from "next/image";
import React from "react";

const dynalight = Dynalight({ weight: "400", subsets: ["latin"] });

export default function Story() {
  return (
    <div className="w-full bg-gradient-to-t from-white to-white/80 relative z-10 p-5">
      <div
        className="w-full p-5 bg-white/30 backdrop-blur-xs border border-white text-center rounded-xl flex flex-col items-center space-y-5 drop-shadow-lg"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <p
          className={`${dynalight.className} text-7xl`}
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          Vira & Edo
        </p>

        <p className="text-right" data-aos="fade-up" data-aos-delay="220">
          Story
        </p>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="280"
        >
          {/* Foto */}
          <div
            className="w-64 h-64 bg-white rounded-xl overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="320"
          >
            <div className="w-full h-full relative">
              <Image
                src="/images/preview/6.jpg"
                alt="bride"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Garis timeline */}
          <div
            className="h-14 w-1 border-l-2 border-slate-200"
            data-aos="fade-in"
            data-aos-delay="360"
          />

          {/* Item 1 */}
          <div className="" data-aos="fade-up" data-aos-delay="420">
            <p className="font-bold">14 Agustus 2024</p>
            <p>
              Dari yang pacarannya nanya "Lagi apa?" lewat SMS bergeser
              dikit-dikit jadi Video Call WA. Dari yang pacarannya sama-sama
              kurus hingga akhirnya melebar bersama.
            </p>
          </div>

          <div
            className="h-14 w-1 border-l-2 border-slate-200"
            data-aos="fade-in"
            data-aos-delay="480"
          />

          {/* Item 2 */}
          <div className="" data-aos="fade-up" data-aos-delay="540">
            <p className="font-bold">14 Agustus 2024</p>
            <p>
              Dari yang pacarannya nanya "Lagi apa?" lewat SMS bergeser
              dikit-dikit jadi Video Call WA. Dari yang pacarannya sama-sama
              kurus hingga akhirnya melebar bersama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
