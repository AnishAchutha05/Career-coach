import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { Navbar } from "../components/Navbar"; // Commenting this out to isolate the error first

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buoyancee",
  description: "Developing Human Excellence",
};

// THIS IS THE PART YOU WERE MISSING OR BROKE
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white`}>
        {/* <Navbar />  We will turn this back on after the error is gone */}
        {children}
      </body>
    </html>
  );
}