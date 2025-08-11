"use client";

type GalleryImage = {
  src: string;
  alt?: string;
};

type Props = {
  images: GalleryImage[];
  className?: string;
};

export default function Gallery({ images, className = "" }: Props) {
  return (
    <div
      className={[
        "columns-2 gap-2", // fix 2 kolom masonry
        className,
      ].join(" ")}
    >
      {images.map((img, i) => (
        <div key={i} className="mb-2 break-inside-avoid">
          <img
            src={img.src}
            alt={img.alt ?? `Photo ${i + 1}`}
            loading="lazy"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
}
