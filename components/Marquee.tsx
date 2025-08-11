"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

type Props = {
  images: string[];
  speed?: number; // default 50
  height?: number;
};

export default function MovingImagesMarquee({
  images,
  speed = 10,
  height = 100,
}: Props) {
  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={speed} gradient={false}>
        {images.map((src, idx) => (
          <div key={idx} className="mx-2">
            <Image
              src={src}
              alt={`Image ${idx + 1}`}
              width={100}
              height={height}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
