import type { Metadata } from "next";
import Providers from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lymbrarie",
  description: "Donde cada libro encuentra su lugar",
  keywords: ["libros", "libro", "biblioteca"],
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="backdrop-blur-4xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 font-mono w-full min-h-screen flex justify-center items-start">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
