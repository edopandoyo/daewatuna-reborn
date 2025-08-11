import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";
import { FiClock, FiMail, FiMapPin } from "react-icons/fi";
import { Dynalight } from "next/font/google";
import ImageSlideShow from "@/components/ImageSlideShow";
import Marquee from "@/components/Marquee";
import { AiOutlineYoutube } from "react-icons/ai";
import { Divider } from "@heroui/react";
import Gallery from "@/components/Gallery";
import Atending from "@/components/Atending";
import Gift from "@/components/Gift";
import Logo from "@/components/Logo";

const dynalight = Dynalight({
  weight: "400", // Dynalight cuma punya 1 weight
  subsets: ["latin"],
});

const images = [
  { src: "/images/preview/1.jpg", alt: "A" },
  { src: "/images/preview/6.jpg", alt: "B" },
  { src: "/images/preview/3.jpg", alt: "C" },
  { src: "/images/preview/4.jpg", alt: "D" },
  { src: "/images/preview/5.jpg", alt: "E" },
  { src: "/images/preview/7.jpg", alt: "E" },
];

export default function UndanganPage() {
  return (
    <div className="relative z-10">
      <section
        id="cover"
        className="w-full h-screen relative overflow-hidden hidden"
      >
        <Image
          src="/images/preview/5.jpg"
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute w-full bg-gradient-to-t from-white to-white/0  h-[60vh] flex items-center justify-center bottom-0 left-0">
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
            <div
              className="text-xs"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              <p>Kepada Yth</p>
              <p>Bapak/Ibu/Saudara/i</p>
            </div>
            <div
              className="p-5 text-center bg-slate-100/50 rounded-xl border border-white"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              Nama tamu undangan
            </div>
            <Button
              startContent={<FiMail />}
              variant="solid"
              color="default"
              className="animate-zoom"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              Buka Undangan
            </Button>
          </div>
        </div>
      </section>
      <ImageSlideShow />
      <div className="h-screen w-full relative z-10">
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/80 to-white/0 h-[80vh] pb-20 flex items-end justify-center">
          <div className="text-center ">
            <p>THE WEDDING OF</p>
            <div className={`${dynalight.className}`}>
              <p className="text-6xl">Vira &</p>
              <p className="text-6xl">Edo</p>
            </div>
            <p>SELASA, 30 DESEMBER 2026</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-t from-white/100 to-white/80 relative z-10 p-5 py-8 space-y-6">
        <div className="flex justify-center gap-6 items-center text-center">
          <div className="">
            <p className="text-xl">27</p>
            <p className="text-xs text-slate-500">Days</p>
          </div>
          <div className="">
            <p className="text-xl">12</p>
            <p className="text-xs text-slate-500">Hours</p>
          </div>
          <div className="">
            <p className="text-xl">57</p>
            <p className="text-xs text-slate-500">Minutes</p>
          </div>
          <div className="">
            <p className="text-xl">34</p>
            <p className="text-xs text-slate-500">Seconds</p>
          </div>
        </div>
        <p className="text-center">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
          sayang."
        </p>

        <Marquee
          images={[
            "/images/preview/1.jpg",
            "/images/preview/2.jpg",
            "/images/preview/3.jpg",
            "/images/preview/4.jpg",
          ]}
          speed={30}
        />
      </div>

      <div className="w-full min-h-screen bg-white/80 relative z-10 p-5">
        <div className=" bg-white/5 backdrop-blur border border-white rounded-xl py-8 px-5 text-center space-y-5 flex flex-col gap-5 items-center">
          <div className="flex items-center justify-between w-full gap-3">
            <div className="w-4/12 text-left">
              <p className="text-3xl text-left italic">Wedding</p>
              <p className={`${dynalight.className} text-5xl`}>Event</p>
            </div>
            <div className="w-full">
              <Divider />
            </div>
          </div>
          <p>
            Tanpa mengurangi rasa hormat dengan ini kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami
          </p>

          <div className="relative h-[240px] w-[240px] rounded-full bg-slate-500">
            <Image
              src="/images/preview/bride.jpg"
              alt="the groom"
              style={{ objectPosition: "top", objectFit: "cover" }}
              className="rounded-full"
              fill
            />
          </div>
          <div className="">
            <p className={`${dynalight.className} text-6xl`}>Vira</p>
            <p>Vira Noprianty, S.Pd</p>
            <p>Putri dari Bapak. Sarbaini (Alm)</p>
            <p>& Ibu Weda</p>
          </div>
          <p className={`${dynalight.className} text-5xl`}>&</p>

          <div className="relative h-[240px] w-[240px] rounded-full bg-slate-500">
            <Image
              src="/images/preview/groom.jpg"
              alt="the groom"
              style={{ objectPosition: "top", objectFit: "cover" }}
              className="rounded-full"
              fill
            />
          </div>
          <div className="">
            <p className={`${dynalight.className} text-6xl`}>Edo</p>
            <p>Edo Hadi Pandoyo, S.T</p>
            <p>Putra dari Bapak. Muraji (Alm)</p>
            <p>& Ibu Heri Asmini (Alm)</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-white/80 relative z-10 p-5 space-y-8">
        <div className="w-full  bg-white rounded-t-full rounded-b-xl border border-yellow-600 text-center py-14 space-y-5 px-5">
          <p className={`${dynalight.className} text-7xl`}>Akad</p>
          <p
            className={`${dynalight.className} text-7xl font-bold text-yellow-600`}
          >
            30
          </p>
          <div className="text-center">
            <p>SELASA, DESEMBER 2025</p>
            <div className="flex items-center justify-center gap-1 text-slate-500 text-sm">
              <FiClock />
              <p>10:00 WIB s/d Selesai</p>
            </div>
          </div>
          <div className="w-full flex justify-center my-">
            <FiMapPin size={34} />
          </div>
          <div className="">
            <p className="font-bold">Kediaman Mempelai Wanita</p>
            <p>Desa Pulau Birandang Kec. Kampa Kab. Kampar</p>
          </div>
          <Button variant="solid" color="default" startContent={<FiMapPin />}>
            Google Map
          </Button>
        </div>
        <div className="w-full  bg-white rounded-b-xl border rounded-t-full  border-yellow-600 text-center py-14 space-y-5 px-5">
          <p className={`${dynalight.className} text-7xl`}>Resepsi</p>
          <p
            className={`${dynalight.className} text-7xl font-bold text-yellow-600`}
          >
            30
          </p>
          <div className="text-center">
            <p>SELASA, DESEMBER 2025</p>
            <div className="flex items-center justify-center gap-1 text-slate-500 text-sm">
              <FiClock />
              <p>13:00 WIB s/d Selesai</p>
            </div>
          </div>
          <div className="w-full flex justify-center my-">
            <FiMapPin size={34} />
          </div>
          <div className="">
            <p className="font-bold">Kediaman Mempelai Wanita</p>
            <p>Desa Pulau Birandang Kec. Kampa Kab. Kampar</p>
          </div>
          <Button variant="solid" color="default" startContent={<FiMapPin />}>
            Google Map
          </Button>
        </div>
      </div>

      <div className="w-full  bg-white/70 backdrop-blur-sm z-10 relative text-center py-5 space-y-5 px-5">
        <p className="font-bold text-xl">Live streaming</p>
        <p className="text-slate-600">
          Kami mengajak anda yang tidak dapat hadir langsung untuk bergabung
          pada momen spesial kami melalui siaran langsung secara virtual dengan
          klik tombol berikut:
        </p>
        <Button
          variant="solid"
          color="default"
          startContent={<AiOutlineYoutube />}
        >
          Youtube
        </Button>
      </div>

      <div className=" w-full bg-white/80 backdrop-blur z-10 p-5 space-y-5">
        <div className="flex items-center justify-between w-full gap-3">
          <div className="w-full">
            <Divider />
          </div>
          <div className="w-4/12 text-left">
            <p className="text-3xl text-left italic">Wedding</p>
            <p className={`${dynalight.className} text-5xl`}>Event</p>
          </div>
        </div>
        <Gallery images={images} />
      </div>

      <div className=" w-full bg-gradient-to-t from-white to-white/80 relative z-10 p-5">
        <div className="w-full p-5 bg-white/30 backdrop-blur-xs border border-white text-center rounded-xl flex flex-col items-center  space-y-5 drop-shadow-lg">
          <p className={`${dynalight.className} text-7xl`}>Vira & Edo</p>
          <p className="text-right">Story</p>
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 bg-white">
              <div className="w-full h-54 bg-green-50 relative">
                <Image
                  src="/images/preview/6.jpg"
                  alt="bride"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="h-14 w-1 border-l-2 border-slate-200"></div>
            <div className="">
              <p className="font-bold">14 Agustus 2024</p>
              <p>
                Dari yang pacarannya nanya "Lagi apa?" lewat sms bergeser
                dikit-dikit jadi VideCall WA. Dari yang pacarannya sama-sama
                kurus hingga akhirnya melebar bersama
              </p>
            </div>
            <div className="h-14 w-1 border-l-2 border-slate-200"></div>
            <div className="">
              <p className="font-bold">14 Agustus 2024</p>
              <p>
                Dari yang pacarannya nanya "Lagi apa?" lewat sms bergeser
                dikit-dikit jadi VideCall WA. Dari yang pacarannya sama-sama
                kurus hingga akhirnya melebar bersama
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gift />
      <Atending />

      <div className="w-full h-screen relative z-10 bg-gradient-to-b from-white/0 to-white/100 flex items-end p-5 text-center pb-12">
        <div className="">
          <p>
            Merupakan suaru kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do&apos;a restu
            kepada kedua mempelai
          </p>
          <p>The Wedding of</p>
          <p className={`text-6xl font-bold ${dynalight.className}`}>
            Vira & Edo
          </p>
          <div className="flex flex-col items-center mt-8 text-sm">
            <Logo />
            <p>&copy;{new Date().getFullYear()} Made With Love by</p>
            <p>Daewatuna.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
