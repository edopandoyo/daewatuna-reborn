"use client";

import { Input, Textarea } from "@heroui/input";
import { Button, Divider, Select, SelectItem } from "@heroui/react";
import React from "react";
import { FiCheckCircle, FiClock } from "react-icons/fi";

export default function Atending() {
  return (
    <div className="bg-gradient-to-b from-white to-white/0 relative z-10 p-5 text-center space-y-5 pt-8">
      <p className="font-bold text-xl" data-aos="zoom-in" data-aos-delay="100">
        Konfirmasi Kehadiran
      </p>

      <p data-aos="fade-up" data-aos-delay="180">
        Mohon kesediaannya untuk melakukan konfirmasi kehadiran, suapaya kami
        bisa mempersiapkan kehadiran anda dengan baik.
      </p>

      {/* Form */}
      <div
        className="space-y-2 p-3 bg-white rounded-lg"
        data-aos="fade-up"
        data-aos-delay="240"
      >
        <Input
          label="Nama"
          variant="bordered"
          data-aos="fade-up"
          data-aos-delay="260"
        />
        <div className="flex gap-3" data-aos="fade-up" data-aos-delay="300">
          <Select variant="bordered" label="Kehadiran" className="w-7/12">
            <SelectItem>Bersedia hadir</SelectItem>
            <SelectItem>Maaf belum bisa hadir</SelectItem>
          </Select>
          <div className="w-5/12">
            <Input variant="bordered" label="Jumlah hadir" type="number" />
          </div>
        </div>
        <Textarea
          label="Ucapan Selamat & Doa"
          variant="bordered"
          minRows={6}
          data-aos="fade-up"
          data-aos-delay="340"
        />
        <div className="text-right" data-aos="zoom-in" data-aos-delay="380">
          <Button variant="solid" color="default">
            Kirim
          </Button>
        </div>
      </div>

      {/* List ucapan */}
      <div
        className="w-full p-5 bg-white/50 backdrop-blur-sm text-left space-y-3 rounded-lg drop-shadow"
        data-aos="fade-up"
        data-aos-delay="420"
      >
        <p
          className="font-bold text-xl"
          data-aos="zoom-in"
          data-aos-delay="450"
        >
          3 Best Friends Wishes
        </p>
        <Divider data-aos="fade-in" data-aos-delay="480" />
        <div className="space-y-3 h-[300px] overflow-y-auto">
          <div
            className="p-3 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="520"
          >
            <p className="flex items-center gap-3 font-bold">
              Agus Putra{" "}
              <span className="text-xs text-slate-500 flex items-center gap-1 italic font-normal">
                <FiClock /> 3 jam lalu
              </span>
            </p>
            <p>
              Selamat ya semoga menjadi keluarga sakinah, mawaddah, warahmah
            </p>
          </div>

          <div
            className="p-3 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="560"
          >
            <p className="flex items-center gap-3 font-bold">
              Febi Putri <FiCheckCircle color="green" />
              <span className="text-xs text-slate-500 flex items-center gap-1 italic font-normal">
                <FiClock /> 4 jam lalu
              </span>
            </p>
            <p>
              Alhamdulillah, ikut bahagia... moga lancar acaranya, cepat dapat
              momongan, aamiin 💕
            </p>
          </div>

          <div
            className="p-3 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="flex items-center gap-3 font-bold">
              Bayu Angga <FiCheckCircle color="green" />
              <span className="text-xs text-slate-500 flex items-center gap-1 italic font-normal">
                <FiClock /> 4 jam lalu
              </span>
            </p>
            <p>
              Alhamdulillah, ikut bahagia... moga lancar acaranya, cepat dapat
              momongan, aamiin 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
