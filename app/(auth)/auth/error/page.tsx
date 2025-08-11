"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/appwrite/web";
import { useMemo } from "react";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Appwrite kadang mengirim pesan error via query (?error= / ?message= / ?code=)
  const { title, detail } = useMemo(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error") || searchParams.get("message");
    return {
      title: "Authentication Failed",
      detail:
        error ||
        (code
          ? `Error code: ${code}`
          : "Login/OAuth gagal. Silakan coba lagi."),
    };
  }, [searchParams]);

  return (
    <main className="min-h-[60vh] grid place-items-center px-4">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm bg-white">
        <h1 className="text-xl font-semibold">Oops!</h1>
        <p className="mt-1 text-sm text-gray-600">{title}</p>

        <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
          {detail}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => signInWithGoogle()}
            className="w-full rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
          >
            Try Google Sign-in Again
          </button>

          <button
            onClick={() => router.replace("/login")}
            className="w-full rounded-lg border px-4 py-2 hover:bg-gray-50"
          >
            Back to Login
          </button>

          <p className="text-xs text-gray-500 text-center">
            Perlu bantuan?{" "}
            <Link href="/support" className="underline">
              Hubungi support
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
