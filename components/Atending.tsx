"use client";

import { Input, Textarea } from "@heroui/input";
import { Button, Divider, Select, SelectItem } from "@heroui/react";
import React from "react";
import { FiCheckCircle, FiClock } from "react-icons/fi";

export default function Atending() {
  return (
    <div className="bg-gradient-to-b from-white to-white/0 relative z-10 p-5 text-center space-y-5 pt-8">
      <p className="font-bold text-xl">Konfirmasi Kehadiran</p>
      <p>
        Mohon kesediaannya untuk melakukan konfirmasi kehadiran, suapaya kami
        bisa mempersiapkan kehadiran anda dengan baik.
      </p>
      <div className="space-y-2 p-3 bg-white rounded-lg">
        <Input label="Nama" variant="bordered" />
        <div className="flex gap-3">
          <Select variant="bordered" label="Kehadiran" className="w-2/3">
            <SelectItem>Bersedia hadir</SelectItem>
            <SelectItem>Maaf belum bisa hadir</SelectItem>
          </Select>
          <div className="w-1/3">
            <Input
              variant="bordered"
              label="Jumlah hadir"
              type="number"
            ></Input>
          </div>
        </div>
        <Textarea
          label="Ucapan Selamat & Doa"
          variant="bordered"
          minRows={6}
        ></Textarea>
        <div className="text-right">
          <Button variant="solid" color="default">
            Kirim
          </Button>
        </div>
      </div>
      <div className="w-full h-[350px] p-5 bg-white/50 backdrop-blur-sm text-left space-y-3 rounded-lg drop-shadow overflow-y-auto">
        <p className="font-bold text-xl">3 Best Friends Wishes</p>
        <Divider />
        <div className="p-3 bg-slate-100 rounded-lg">
          <p className="flex items-center gap-3 font-bold">
            Agus Putra{" "}
            <span className="text-xs text-slate-500 flex items-center gap-1 italic font-normal">
              <FiClock /> 3 jam lalu
            </span>
          </p>
          <p>Selamat ya semoga menjadi keluarga sakinah, mawaddah, warahmah</p>
        </div>
        <div className="p-3 bg-slate-100 rounded-lg">
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
        <div className="p-3 bg-slate-100 rounded-lg">
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
  );
}
