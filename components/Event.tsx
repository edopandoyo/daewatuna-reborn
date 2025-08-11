import { Button } from "@heroui/button";
import { Dynalight } from "next/font/google";
import { FiClock, FiMapPin } from "react-icons/fi";

const dynalight = Dynalight({ weight: "400", subsets: ["latin"] });

export default function Event() {
  return (
    <div className="w-full min-h-screen bg-white/80 relative z-10 p-5 space-y-8">
      {/* Card Akad */}
      <div
        className="w-full bg-white rounded-t-full rounded-b-xl border border-yellow-600 text-center py-14 space-y-5 px-5"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <p
          className={`${dynalight.className} text-7xl`}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Akad
        </p>

        <p
          className={`${dynalight.className} text-7xl font-bold text-yellow-600`}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          30
        </p>

        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <p>SELASA, DESEMBER 2025</p>
          <div className="flex items-center justify-center gap-1 text-slate-500 text-sm">
            <FiClock />
            <p>10:00 WIB s/d Selesai</p>
          </div>
        </div>

        <div
          className="w-full flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <FiMapPin size={34} />
        </div>

        <div data-aos="fade-up" data-aos-delay="450">
          <p className="font-bold">Kediaman Mempelai Wanita</p>
          <p>Desa Pulau Birandang Kec. Kampa Kab. Kampar</p>
        </div>

        <Button
          variant="solid"
          color="default"
          startContent={<FiMapPin />}
          className="mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Google Map
        </Button>
      </div>

      {/* Card Resepsi */}
      <div
        className="w-full bg-white rounded-b-xl border rounded-t-full border-yellow-600 text-center py-14 space-y-5 px-5"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        <p
          className={`${dynalight.className} text-7xl`}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Resepsi
        </p>

        <p
          className={`${dynalight.className} text-7xl font-bold text-yellow-600`}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          30
        </p>

        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <p>SELASA, DESEMBER 2025</p>
          <div className="flex items-center justify-center gap-1 text-slate-500 text-sm">
            <FiClock />
            <p>13:00 WIB s/d Selesai</p>
          </div>
        </div>

        <div
          className="w-full flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <FiMapPin size={34} />
        </div>

        <div data-aos="fade-up" data-aos-delay="450">
          <p className="font-bold">Kediaman Mempelai Wanita</p>
          <p>Desa Pulau Birandang Kec. Kampa Kab. Kampar</p>
        </div>

        <Button
          variant="solid"
          color="default"
          startContent={<FiMapPin />}
          className="mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Google Map
        </Button>
      </div>
    </div>
  );
}
