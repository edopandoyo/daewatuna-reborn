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
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { signIn } from "@/lib/appwrite/web";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const router = useRouter();

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrMessage("");
    try {
      await signIn(email, password);
      router.replace("/dashboard");
    } catch (error) {
      setErrMessage("Email atau Password salah");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-100 p-6 ">
        <CardHeader className="flex items-center gap-1">
          <Logo />
          <h1 className="text-xl font-bold ">Daewatuna</h1>
        </CardHeader>
        <CardBody className="space-y-4">
          <p className="text-gray-800 text-2xl">Welcome Back</p>
          <p className="text-gray-500 text-sm">
            Masukkan E-mail dan kata sandi yang sudah terdaftar di Daewatuna
          </p>
          {errMessage && (
            <div className="p-3 bg-red-100 text-sm rounded-lg">
              {errMessage}
            </div>
          )}
          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
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
              endContent={<FiArrowRight />}
            >
              Masuk
            </Button>
          </form>
          <Link href="#">
            <p>Lupa password?</p>
          </Link>
          <Divider />
          <p className="text-center">
            Belum memiliki akun ?{" "}
            <Link href="/signup" className="text-blue-500 underline">
              Daftar
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
