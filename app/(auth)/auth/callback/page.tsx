"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { account, persistJWT } from "@/lib/appwrite/web";

export default function OAuthCallback() {
  const router = useRouter();
  useEffect(() => {
    // Setelah Appwrite redirect kembali, sesi sudah ada → minta JWT → simpan cookie → redirect
    (async () => {
      try {
        await persistJWT();
        router.replace("/dashboard");
      } catch (error) {
        console.log(error);

        router.replace("/auth/error");
      }
    })();
  }, [router]);

  return <p>Signing you in…</p>;
}
