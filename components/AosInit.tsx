"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: true, // animasi hanya jalan sekali
    });
  }, []);

  return null;
}
