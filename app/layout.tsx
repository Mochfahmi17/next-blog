import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/footer/footer";
import NavbarWrapper from "@/components/navbar/navbar-wrapper";
import "animate.css";
import AOSWrapper from "@/components/aos-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to blog - Your Source for Latest Articles and Insights",
  description:
    "Discover the latest articles, tutorials, and insights on technology, lifestyle, and more. Stay updated with blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarWrapper />
        <AOSWrapper />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
