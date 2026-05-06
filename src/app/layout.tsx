import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Mateus Marinho | Backend Developer",
  description:
    "Retro RPG portfolio for a backend developer focused on Go, Linux, REST APIs, Laravel, Docker, and production systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} antialiased bg-[#050510] text-[#e0e0e0] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
