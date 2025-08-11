import React from "react";
import Logo from "./Logo";

export default function Brand() {
  return (
    <div
      className="flex flex-col items-center mt-8 text-sm"
      data-aos="fade-in"
      data-aos-duration={100}
    >
      <Logo />
      <p>&copy;{new Date().getFullYear()} Made With Love by</p>
      <p>Daewatuna.com</p>
    </div>
  );
}
