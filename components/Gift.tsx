import { Button } from "@heroui/button";
import React from "react";
import { FiCopy } from "react-icons/fi";

export default function Gift() {
  return (
    <div className="w-full bg-gradient-to-t from-white to-white/80  relative z-10 p-5 text-center space-y-5 pt-8">
      <p className="font-bold text-2xl">Wedding Gift</p>
      <p>
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan kika
        memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado
        melalui:
      </p>
      <div className="p-8 bg-gradient-to-r from-slate-50 to-slate-200 drop-shadow-lg w-full min-h-10 rounded-xl text-left">
        <p className="text-right font-bold text-3xl">BCA</p>
        <div className="py-3 text-left">
          <p>Vira Noprianty</p>
          <p>1270635803579353</p>
        </div>
        <Button size="sm" variant="solid" startContent={<FiCopy />}>
          salin no rekening
        </Button>
      </div>
      <div className="p-8 bg-gradient-to-r from-slate-50 to-slate-200 drop-shadow-lg w-full min-h-10 rounded-xl text-left">
        <p className="text-right font-bold text-3xl">BSI</p>
        <div className="py-3 text-left">
          <p>EDO HADI PANDOYO</p>
          <p>89039370</p>
        </div>
        <Button size="sm" variant="solid" startContent={<FiCopy />}>
          salin no rekening
        </Button>
      </div>
    </div>
  );
}
