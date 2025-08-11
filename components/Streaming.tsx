import { Button } from "@heroui/button";
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Streaming() {
  return (
    <div className="w-full bg-white/70 backdrop-blur-sm z-10 relative text-center py-5 space-y-5 px-5">
      <p className="font-bold text-xl" data-aos="zoom-in" data-aos-delay="100">
        Live streaming
      </p>

      <p className="text-slate-600" data-aos="fade-up" data-aos-delay="200">
        Kami mengajak anda yang tidak dapat hadir langsung untuk bergabung pada
        momen spesial kami melalui siaran langsung secara virtual dengan klik
        tombol berikut:
      </p>

      <Button
        variant="solid"
        color="default"
        startContent={<AiOutlineYoutube />}
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        Youtube
      </Button>
    </div>
  );
}
