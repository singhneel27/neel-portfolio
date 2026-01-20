import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neel Singh | MSCS @ Texas A&M",
  description:
    "Neel Singh – MS in Computer Science at Texas A&M University (May 2026). AI/ML, Systems, Data Engineering. Portfolio and projects.",
  metadataBase: new URL("https://neel-portfolio-vercel.vercel.app"),
  openGraph: {
    title: "Neel Singh | MSCS @ Texas A&M",
    description:
      "AI/ML • Systems • Data Engineering — Projects, experience, and resume.",
    url: "https://neel-portfolio-vercel.vercel.app",
    siteName: "Neel Singh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
