import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  text?: string;
  size?: string;
  height?: number;
  width?: number;
};

export default function Logo({
  className,
  text,
  size,
  height = 35,
  width = 35,
}: Props) {
  return (
    <div className={className}>
      <Image src="/logo.png" alt="logo" width={width} height={height} />
      {text && <p>Daewatuna</p>}
    </div>
  );
}
