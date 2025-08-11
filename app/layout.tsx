import AOSInit from "@/components/AosInit";
import "@/styles/globals.css";

import { Metadata, Viewport } from "next";

export const metadata: Metadata = {};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
