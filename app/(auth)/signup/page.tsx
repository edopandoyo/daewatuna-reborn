"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Divider,
} from "@heroui/react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/appwrite/web";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrMessage("");
    try {
      await signUp(name, email, password);
      await fetch("/api/users/upsert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: noHp }),
        credentials: "include",
      });
      router.replace("/dashboard");
    } catch (error) {
      setErrMessage(
        "Gagal daftar. Pastikan email belum terpakai & password valid."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-100 p-6">
        <CardHeader className="flex items-center gap-1">
          <Logo />
          <h1 className="text-xl font-bold ">Daewatuna</h1>
        </CardHeader>
        <CardBody className="space-y-4">
          <p className="text-gray-800 text-2xl">Mendaftar</p>
          <p className="text-gray-500 text-sm">
            Buat akun terlebih dahulu untuk menikmati layanan Daewatuna
          </p>
          {errMessage && (
            <div className="p-3 bg-red-100 text-sm rounded-lg">
              {errMessage}
            </div>
          )}
          <form onSubmit={handleSignup} className="space-y-4">
            <Input
              startContent={<FiUser className="text-gray-400" />}
              type="text"
              label="Nama Lengkap"
              placeholder="Agus Austin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isRequired
            />
            <Input
              startContent={<FiUser className="text-gray-400" />}
              type="number"
              label="Nomor Whatsapp"
              placeholder="0821xxxxxxxx"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              isRequired
            />
            <Input
              startContent={<FiMail className="text-gray-400" />}
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
            <Input
              startContent={<FiLock className="text-gray-400" />}
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired
            />
            <Button
              type="submit"
              color="primary"
              className="w-full"
              isLoading={loading}
            >
              Daftar
            </Button>
          </form>
          <Divider />
          <p className="text-center">
            Sudah memiliki akun ?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
