import { Button } from "@heroui/button";
import { Dynalight } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FiMail } from "react-icons/fi";

const dynalight = Dynalight({
  weight: "400", // Dynalight cuma punya 1 weight
  subsets: ["latin"],
});

export default function Cover({ onClose }: { onClose: () => void }) {
  return (
    <section id="cover" className="w-full h-screen overflow-hidden relative">
      <Image
        src="/images/preview/5.jpg"
        alt="Background"
        fill
        className="object-cover object-bottom"
        priority
      />
      <div className="absolute w-full bg-gradient-to-t from-white to-white/0  h-[60vh] pb-10 flex items-center justify-center bottom-0 left-0">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center">
            <h1
              className={`text-7xl font-bold ${dynalight.className}`}
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              V
            </h1>
            <h1
              className={`text-7xl font-bold ${dynalight.className}`}
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            >
              E
            </h1>
          </div>
          <div className="text-xs" data-aos="fade-in" data-aos-duration="1000">
            <p>Kepada Yth</p>
            <p>Bapak/Ibu/Saudara/i</p>
          </div>
          <div
            className="p-5 text-center bg-slate-100/50 rounded-xl border border-white"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            Nama tamu undangan
          </div>
          <Button
            startContent={<FiMail />}
            variant="solid"
            color="default"
            className="animate-zoom"
            data-aos="fade-in"
            data-aos-duration="1000"
            onPress={onClose}
          >
            Buka Undangan
          </Button>
        </div>
      </div>
    </section>
  );
}
