import { Divider } from "@heroui/react";
import { Dynalight } from "next/font/google";
import Image from "next/image";
import React from "react";

const dynalight = Dynalight({
  weight: "400", // Dynalight cuma punya 1 weight
  subsets: ["latin"],
});

export default function Event() {
  return (
    <div className="w-full min-h-screen bg-white/80 relative z-10 p-5">
      <div className=" bg-white/5 backdrop-blur border border-white rounded-xl py-8 px-5 text-center space-y-5 flex flex-col gap-5 items-center">
        <div
          className="flex items-center justify-between w-full gap-3"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          <div className="w-4/12 text-left">
            <p className="text-3xl text-left italic">Wedding</p>
            <p className={`${dynalight.className} text-5xl`}>Event</p>
          </div>
          <div className="w-full">
            <Divider />
          </div>
        </div>
        <p data-aos="fade-up" data-aos-duration={1000}>
          Tanpa mengurangi rasa hormat dengan ini kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami
        </p>

        <div
          className="relative h-[240px] w-[240px] rounded-full bg-slate-500"
          data-aos="flip-right"
          data-aos-duration={1000}
        >
          <Image
            src="/images/preview/bride.jpg"
            alt="the groom"
            style={{ objectPosition: "top", objectFit: "cover" }}
            className="rounded-full"
            fill
          />
        </div>
        <div className="" data-aos="fade-up" data-aos-duration={1000}>
          <p className={`${dynalight.className} text-6xl`}>Vira</p>
          <p>Vira Noprianty, S.Pd</p>
          <p>Putri dari Bapak. Sarbaini (Alm)</p>
          <p>& Ibu Weda</p>
        </div>
        <p
          className={`${dynalight.className} text-5xl`}
          data-aos="fade-in"
          data-aos-duration={1000}
        >
          &
        </p>

        <div
          className="relative h-[240px] w-[240px] rounded-full bg-slate-500"
          data-aos="flip-left"
          data-aos-duration={1000}
        >
          <Image
            src="/images/preview/groom.jpg"
            alt="the groom"
            style={{ objectPosition: "top", objectFit: "cover" }}
            className="rounded-full"
            fill
          />
        </div>
        <div className="" data-aos="fade-up" data-aos-duration={1000}>
          <p className={`${dynalight.className} text-6xl`}>Edo</p>
          <p>Edo Hadi Pandoyo, S.T</p>
          <p>Putra dari Bapak. Muraji (Alm)</p>
          <p>& Ibu Heri Asmini (Alm)</p>
        </div>
      </div>
    </div>
  );
}
