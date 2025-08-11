"use client";

import { Divider } from "@heroui/react";
import { Dynalight } from "next/font/google";

const dynalight = Dynalight({ weight: "400", subsets: ["latin"] });

type GalleryImage = { src: string; alt?: string };
type Props = { images: GalleryImage[]; className?: string };

export default function Gallery({ images, className = "" }: Props) {
  return (
    <div className="w-full bg-white/80 backdrop-blur z-10 p-5 space-y-5">
      <div className="flex items-center justify-between w-full gap-3">
        <div className="w-full" data-aos="fade-right" data-aos-delay="100">
          <Divider />
        </div>
        <div className="w-4/12 text-left">
          <p
            className="text-3xl italic"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            Our
          </p>
          <p
            className={`${dynalight.className} text-5xl`}
            data-aos="zoom-in"
            data-aos-delay="220"
          >
            Gallery
          </p>
        </div>
      </div>

      <div className={["columns-2 gap-2", className].join(" ")}>
        {images.map((img, i) => (
          <div
            key={i}
            className="mb-2 break-inside-avoid"
            data-aos="zoom-in"
            data-aos-delay={100 + i * 80} // stagger per item
          >
            <img
              src={img.src}
              alt={img.alt ?? `Photo ${i + 1}`}
              loading="lazy"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
