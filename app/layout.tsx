// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar"; // Corrected import path
import { Footer } from "../components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
  display: "swap" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Buoyancee | Developing Human Excellence",
  description: "Identity over Skills. Executive Coaching and Corporate Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-[#0a0a0a] text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}